# ACM Conference on Computer and Communications Security[2022]
## Designing Hardware for Cryptography and Cryptography for Hardware.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#designing-hardware-for-cryptography-and-cryptography-for-hardware)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#designing-hardware-for-cryptography-and-cryptography-for-hardware)
### Authors
* Srinivas Devadas, Massachusetts Institute of Technology, Cambridge, MA, USA
* Simon Langowski, Massachusetts Institute of Technology, Cambridge, MA, USA
* Nikola Samardzic, Massachusetts Institute of Technology, Cambridge, MA, USA
* Sacha Servan-Schreiber, Massachusetts Institute of Technology, Cambridge, MA, USA
* Daniel Sanchez, Massachusetts Institute of Technology, Cambridge, MA, USA
### Abstract
> There have been few high-impact deployments of hardware implementations of cryptographic primitives. We present the benefits and challenges of hardware acceleration of sophisticated cryptographic primitives and protocols, and briefly describe our recent work. We argue the significant potential for synergistic codesign of cryptography and hardware, where customized hardware accelerates cryptographic protocols that are designed with hardware acceleration in mind.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559393](https://doi.org/10.1145/3548606.3559393)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559393](https://dl.acm.org/doi/pdf/10.1145/3548606.3559393)
## We Are the Experts, and We Are the Problem: The Security Advice Fiasco.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#we-are-the-experts-and-we-are-the-problem-the-security-advice-fiasco)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#we-are-the-experts-and-we-are-the-problem-the-security-advice-fiasco)
### Authors
* Michelle Mazurek, University of Maryland, College Park, MD, USA
### Abstract
> In an ideal world, automated tools and systems could manage security and privacy seamlessly and transparently with minimal human input. In the real world, we are nowhere close to that ideal. Instead, in order to achieve good security and privacy outcomes, people need to absorb and apply high-quality security and privacy information and advice. This applies not only to end users, but also to software developers, product managers, and even security operations professionals. Sadly, the current state of the security advice and information ecosystem is in many respects a disaster. End users often get their advice from TV shows, movies, and even misleading influencer ads [2, 4], while soft ware developers take unvetted suggestions from Stack Overflow [1, 3]. Even compliance standards -- which are designed to provide authoritative security guidance -- have numerous problems [6, 7]. Our review of security advice on the web found 374 unique advice imperatives, many of which directly contradict one another [5]. This sad state of affairs is, in many ways, our fault. Security experts, like the ones who attend conferences such as CCS, often refuse to prioritize, recommending maximum security without tailoring to specific situations. Researchers evaluate tools and techniques in idealized rather than realistic use contexts, and have made little progress in accurately measuring the costs and benefits of any particular intervention. In this talk, I will review the many problems of the security and privacy information and advice ecosystem, and how we got here. I'll outline our responsibility, as experts and researchers, to help improve the quality, availability, and usability of security and privacy information. Finally, I'll discuss at what we know (and what we need to find out) about how to make progress.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559394](https://doi.org/10.1145/3548606.3559394)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559394](https://dl.acm.org/doi/pdf/10.1145/3548606.3559394)
## Sustainability is a Security Problem.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sustainability-is-a-security-problem)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sustainability-is-a-security-problem)
### Authors
* Patrick Drew McDaniel, University of Wisconsin-Madison, Madison, WI, USA
### Abstract
> No abstract available.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559396](https://doi.org/10.1145/3548606.3559396)
## Updatable Public Key Encryption from DCR: Efficient Constructions With Stronger Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#updatable-public-key-encryption-from-dcr-efficient-constructions-with-stronger-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#updatable-public-key-encryption-from-dcr-efficient-constructions-with-stronger-security)
### Authors
* Calvin Abou Haidar, Inria, ENS Lyon, Lyon, France
* Benoit Libert, Inria, ENS Lyon, Lyon, France
* Alain Passelègue, Inria, ENS Lyon, Lyon, France
### Abstract
> Forward-secure encryption (FS-PKE) is a key-evolving public-key paradigm that preserves the confidentiality of past encryptions in case of key exposure. Updatable public-key encryption (UPKE) is a natural relaxation of FS-PKE, introduced by Jost et al. (Eurocrypt'19), which is motivated by applications to secure messaging. In UPKE, key updates can be triggered by any sender -- via special update ciphertexts -- willing to enforce the forward secrecy of its encrypted messages. So far, the only truly efficient UPKE candidates (which rely on the random oracle idealization) only provide rather weak security guarantees against passive adversaries as they are malleable. Also, they offer no protection against malicious senders willing to hinder the decryption capability of honest users. A recent work of Dodis et al. (TCC'21) described UPKE systems in the standard model that also hedge against maliciously generated update messages in the chosen-ciphertext setting (where adversaries are equipped with a decryption oracle). While important feasibility results, their constructions lag behind random-oracle candidates in terms of efficiency. In this paper, we first provide a drastically more efficient UPKE realization in the standard model using Paillier's Composite Residuosity (DCR) assumption. In the random oracle model, we then extend our initial scheme so as to achieve chosen-ciphertext security, even in a model that accounts for maliciously generated update ciphertexts. Under the DCR and Strong RSA assumptions, we thus obtain the first practical UPKE systems that satisfy the strongest security notions put forth by Dodis et al.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559376](https://doi.org/10.1145/3548606.3559376)
## Helping or Hindering?: How Browser Extensions Undermine Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#helping-or-hindering-how-browser-extensions-undermine-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#helping-or-hindering-how-browser-extensions-undermine-security)
### Authors
* Shubham Agarwal, CISPA Helmholtz Center for Information Security, Saarbrücken, Saarland, Germany
### Abstract
> Browser extensions enhance the functionality of native Web applications on the client side. They provide a rich end-user experience by utilizing feature-rich JavaScript APIs, otherwise inaccessible for native applications. However, prior studies suggest that extensions may degrade the client-side security to execute their operations, such as by altering the DOM, executing untrusted scripts in the applications' context, and performing other security-critical operations for the user. In this study, we instead focus on extensions that tamper with the security headers between the client-server exchange, thereby undermining the security guarantees that these headers provide to the application. To this end, we present our automated analysis framework to detect such extensions by leveraging static and dynamic analysis techniques. We statically identify extensions with the permission to modify headers and then instrument the dangerous APIs to investigate their runtime behavior with respect to modifying headers in-flight. We then use our framework to analyze the three snapshots of the Chrome extension store from Jun 2020, Feb 2021, and Jan 2022. In doing so, we detect 1,129 distinct extensions that interfere with security-related request/response headers and discuss the associated security implications. The impact of our findings is aggravated by the extensions, with millions of installations dropping critical security headers like Content-Security-Policy or X-Frame-Options.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560685](https://doi.org/10.1145/3548606.3560685)
## Practical, Round-Optimal Lattice-Based Blind Signatures.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#practical-round-optimal-lattice-based-blind-signatures)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#practical-round-optimal-lattice-based-blind-signatures)
### Authors
* Shweta Agrawal, IIT Madras, Chennai, India
* Elena Kirshanova, I. Kant BFU & Technology Innovation Institute, Abu Dhabi, UAE
* Damien Stehlé, ENS de Lyon & Institut Universitaire de France, Lyon, France
* Anshu Yadav, IIT Madras, Chennai, India
### Abstract
> Blind signatures are a fundamental cryptographic primitive with numerous practical applications. While there exist many practical blind signatures from number-theoretic assumptions, the situation is far less satisfactory from post-quantum assumptions. In this work, we provide the first overall practical, lattice-based blind signature, supporting an unbounded number of signature queries and additionally enjoying optimal round complexity. We provide a detailed estimate of parameters achieved -- we obtain a signature of size slightly above 45KB, for a core-SVP hardness of 109 bits. The run-times of the signer, user and verifier are also very small.   Our scheme relies on the Gentry, Peikert and Vaikuntanathan signature [STOC'08] and non-interactive zero-knowledge proofs for linear relations with small unknowns, which are significantly more efficient than their general purpose counterparts. Its security stems from a new and arguably natural assumption which we introduce, called the one-more-ISIS assumption. This assumption can be seen as a lattice analogue of the one-more-RSA assumption by Bellare et al [JoC'03]. To gain confidence in our assumption, we provide a detailed analysis of diverse attack strategies.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560650](https://doi.org/10.1145/3548606.3560650)
## Blacktooth: Breaking through the Defense of Bluetooth in Silence.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#blacktooth-breaking-through-the-defense-of-bluetooth-in-silence)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#blacktooth-breaking-through-the-defense-of-bluetooth-in-silence)
### Authors
* Mingrui Ai, University of Science and Technology of China, Hefei, China
* Kaiping Xue, University of Science and Technology of China, Hefei, China
* Bo Luo, University of Kansas, Lawrence, KS, USA
* Lutong Chen, University of Science and Technology of China, Hefei, China
* Nenghai Yu, University of Science and Technology of China, Hefei, China
* Qibin Sun, University of Science and Technology of China, Hefei, China
* Feng Wu, University of Science and Technology of China, Hefei, China
### Abstract
> Bluetooth is a short-range wireless communication technology widely used by billions of personal computing, IoT, peripheral, and wearable devices. Bluetooth devices exchange commands and data, such as keyboard/mouse inputs, audio, and files, through a secure communication channel that is established through a pairing process. Due to the sensitivity of those commands and data, security mechanisms, such as encryption, authentication, and authorization, have been developed and adopted in the standards. Nevertheless, vulnerabilities continue to be discovered.   In the literature, few successful attacks against the Bluetooth connection establishment stage have been reported. Many attacks simply assume that connections are already established or use a compromised agent, e.g, a malicious app or a careless user, to initialize the connection. We argue that such assumptions are strong and impractical. A stealthily established connection is a critical starting point for any practical attack against Bluetooth devices. In this paper, we demonstrate that the Bluetooth Specification contains a series of vulnerabilities that will enable an attacker to impersonate a Bluetooth device and successfully establish a connection with a victim device. The entire process does not require any involvement of the device owner/user or any malicious app on the victim device. The attacker could further escalate permissions by switching Bluetooth profiles to retrieve sensitive information from the victim device and inject arbitrary commands. We name our new attack as the Blacktooth Attack. To demonstrate the effectiveness and practicality of the Blacktooth attack, we evaluate it against 21 different Bluetooth devices with diverse manufacturers and operating systems, and all major Bluetooth versions. We show that the newly proposed attack is successful on all victim devices.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560668](https://doi.org/10.1145/3548606.3560668)
## Server-Aided Continuous Group Key Agreement.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#server-aided-continuous-group-key-agreement)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#server-aided-continuous-group-key-agreement)
### Authors
* Joël Alwen, AWS-Wickr, New York, NY, USA
* Dominik Hartmann, Ruhr-University Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-University Bochum, Bochum, Germany
* Marta Mularczyk, AWS-Wickr, New York, NY, USA
### Abstract
> Continuous Group Key Agreement (CGKA) -- or Group Ratcheting -- lies at the heart of a new generation of scalable End-to-End secure (E2E) cryptographic multi-party applications. One of the most important (and first deployed) CGKAs is ITK which underpins the IETF's upcoming Messaging Layer Security E2E secure group messaging standard. To scale beyond the group sizes possible with earlier E2E protocols, a central focus of CGKA protocol design is to minimize bandwidth requirements (i.e. communication complexity). In this work, we advance both the theory and design of CGKA culminating in an extremely bandwidth efficient CGKA. To that end, we first generalize the standard CGKA communication model by introducing server-aided CGKA (saCGKA) which generalizes CGKA and more accurately models how most E2E protocols are deployed in the wild. Next, we introduce the SAIK protocol; a modification of ITK, designed for real-world use, that leverages the new capabilities available to an saCGKA to greatly reduce its communication (and computational) complexity in practical concrete terms. Further, we introduce an intuitive, yet precise, security model for saCGKA. It improves upon existing security models for CGKA in several ways. It more directly captures the intuitive security goals of CGKA. Yet, formally it also relaxes certain requirements allowing us to take advantage of the saCGKA communication model. Finally, it is significantly simpler making it more tractable to work with and easier to build intuition for. As a result, the security proof of SAIK is also simpler and more modular. Finally, we provide empirical data comparing the (at times, quite dramatically improved) complexity profile of SAIK to state-of-the art CGKAs. For example, in a newly created group with 10K members, to change the group state (e.g. add/remove parties) ITK requires each group member download 1.38MB. However, with SAIK, members download no more than 2.7KB.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560632](https://doi.org/10.1145/3548606.3560632)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560632](https://dl.acm.org/doi/pdf/10.1145/3548606.3560632)
## Enforcing Fine-grained Constant-time Policies.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#enforcing-fine-grained-constant-time-policies)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#enforcing-fine-grained-constant-time-policies)
### Authors
* Basavesh Ammanaghatta Shivakumar, MPI-SP, Bochum, Germany
* Gilles Barthe, MPI-SP & IMDEA Software Institute, Bochum, Germany
* Benjamin Grégoire, Inria & Université Côte d'Azur, Sophia-Antipolis, France
* Vincent Laporte, Université de Lorraine & CNRS & Inria & LORIA, Nancy, France
* Swarn Priya, Université Côte d'Azur & Inria, Sophia-Antipolis, France
### Abstract
> Cryptographic constant-time (CT) is a popular programming discipline used by cryptographic libraries to protect themselves against timing attacks. The CT discipline aims to enforce that program execution does not leak secrets, where leakage is defined by a formal leakage model. In practice, different leakage models coexist, sometimes even within a single library, both to reflect different architectures and to accommodate different security-efficiency trade-offs.  Constant-timeness is popular and can be checked automatically by many tools. However, most sound tools are focused on a baseline (BL) leakage model. In contrast, (sound) verification methods for other leakage models are less developed, in part because these models require modular arithmetic reasoning. In this paper, we develop a systematic, sound, approach for enforcing fine-grained constant-time policies beyond the BL model. Our approach combines two main ingredients: a verification infrastructure, which proves that source programs are constant-time, and a compiler infrastructure, which provably preserves constant-timeness for these fine-grained policies. By making these infrastructures parametric in the leakage model, we achieve the first approach that supports fine-grained constant-time policies. We implement the approach in the Jasmin framework for high-assurance cryptography, and we evaluate our approach with examples from the literature: OpenSSL and wolfSSL. We found a bug in OpenSSL and provided a formally verified fix.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560689](https://doi.org/10.1145/3548606.3560689)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560689](https://dl.acm.org/doi/pdf/10.1145/3548606.3560689)
## Post Quantum Noise.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#post-quantum-noise)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#post-quantum-noise)
### Authors
* Yawning Angel, Oasis Labs, San Francisco, CA, USA
* Benjamin Dowling, University of Sheffield, Sheffield, Netherlands
* Andreas Hülsing, TU Eindhoven, Eindhoven, Netherlands
* Peter Schwabe, MPI-SP, Bochum, Germany
* Florian Weber, TU Eindhoven, Eindhoven, Netherlands
### Abstract
> We introduce PQNoise, a post-quantum variant of the Noise framework. We demonstrate that it is possible to replace the Diffie-Hellman key-exchanges in Noise with KEMs in a secure way. A challenge is the inability to combine key pairs of KEMs, which can be resolved by certain forms of randomness-hardening for which we introduce a formal abstraction. We provide a generic recipe to turn classical Noise patterns into PQNoise patterns. We prove that the resulting PQNoise patterns achieve confidentiality and authenticity in the fACCE model. Moreover we show that for those classical Noise-patterns that have been conjectured or proven secure in the fACCE model our matching PQNoise patterns eventually achieve the same security. Our security proof is generic and applies to any valid PQNoise pattern. This is made possible by another abstraction, called a hash-object, which hides the exact workings of how keying material is processed in an abstract stateful object that outputs pseudorandom keys under different corruption patterns. We also show that the hash chains used in Noise are a secure hash-object. Finally, we demonstrate the practicality of PQNoise delivering benchmarks for several base patterns.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560577](https://doi.org/10.1145/3548606.3560577)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560577](https://dl.acm.org/doi/pdf/10.1145/3548606.3560577)
## Laconic Private Set-Intersection From Pairings.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#laconic-private-set-intersection-from-pairings)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#laconic-private-set-intersection-from-pairings)
### Authors
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Chuanwei Lin, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### Abstract
> Private set-intersection (PSI) is one of the most practically relevant special-purpose secure multiparty computation tasks, as it is motivated by many real-world applications. In this paper we present a new private set-intersection protocol which is laconic, meaning that the protocol only has two rounds and that the first message is independent of the set sizes. Laconic PSI can be useful in applications, where servers with large sets would like to learn the intersection of their set with smaller sets owned by resource-constrained clients and where multiple rounds of interactions are not possible. Previously, practically relevant laconic PSI protocols were only known from factoring-type assumptions. The contributions of this work are twofold: 1) We present the first laconic PSI protocol based on assumptions over pairing-friendly elliptic curves; and 2) For the first time we provide empirical evaluation of any laconic PSI protocol by carefully implementing and optimizing both our and previous protocols. Our experimental results shows that our protocol outperforms prior laconic PSI protocols.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560642](https://doi.org/10.1145/3548606.3560642)
## Efficient Secure Three-Party Sorting with Applications to Data Analysis and Heavy Hitters.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#efficient-secure-three-party-sorting-with-applications-to-data-analysis-and-heavy-hitters)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#efficient-secure-three-party-sorting-with-applications-to-data-analysis-and-heavy-hitters)
### Authors
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Koki Hamada, NTT Corporation, Tokyo, Japan
* Dai Ikarashi, NTT Corporation, Tokyo, Japan
* Ryo Kikuchi, NTT Corporation, Tokyo, Japan
* Ariel Nof, Technion, Haifa, Israel
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Katsumi Takahashi, NTT Corporation, Ramat Gan, Japan
* Junichi Tomida, NTT Corporation, Tokyo, Japan
### Abstract
> We present a three-party sorting protocol secure against passive and active adversaries in the honest majority setting. The protocol can be easily combined with other secure protocols which work on shared data, and thus enable different data analysis tasks, such as private set intersection of shared data, deduplication, and the identification of heavy hitters. The new protocol computes a stable sort. It is based on radix sort and is asymptotically better than previous secure sorting protocols. It improves on previous radix sort protocols by not having to shuffle the entire length of the items after each comparison step. We implemented our sorting protocol with different optimizations and achieved concretely fast performance. For example, sorting one million items with 32-bit keys and 32-bit values takes less than 2 seconds with semi-honest security and about 3.5 seconds with malicious security. Finding the heavy hitters among hundreds of thousands of 256-bit values takes only a few seconds, compared to close to an hour in previous work.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560691](https://doi.org/10.1145/3548606.3560691)
## Chaghri - A FHE-friendly Block Cipher.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#chaghri-a-fhe-friendly-block-cipher)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#chaghri-a-fhe-friendly-block-cipher)
### Authors
* Tomer Ashur, Eindhoven University of Technology, KU Leuven, Leuven, Netherlands
* Mohammad Mahzoun, Eindhoven University of Technology, Eindhoven, Netherlands
* Dilara Toprakhisar, KU Leuven, Leuven, Belgium
### Abstract
> The Recent progress in practical applications of secure computation protocols has also attracted attention to the symmetric-key primitives underlying them. Whereas traditional ciphers have evolved to be efficient with respect to certain performance metrics, advanced cryptographic protocols call for a different focus. The so called arithmetic complexity is viewed through the number and layout of non-linear operations in the circuit implemented by the protocol. Symmetric-key algorithms that are optimized with respect to this metric are said to be algebraic ciphers. Previous work targeting ZK and MPC protocols delivered great improvement in the performance of these applications both in lab and in practical use. Interestingly, despite its apparent benefits to privacy-aware cloud computing, algebraic ciphers targeting FHE did not attract similar attention.  In this paper we present Chaghri, an FHE-friendly block cipher enabling efficient transciphering in BGV-like schemes. A complete Chaghri circuit can be implemented using only 16 multiplications, 48 Frobenius automorphisms and 32 rotations, all arranged in a depth-32 circuit. Our HElib implementation achieves a throughput of 0.28 seconds-per-bit which is 63% faster thanAES in the same setting.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559364](https://doi.org/10.1145/3548606.3559364)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559364](https://dl.acm.org/doi/pdf/10.1145/3548606.3559364)
## Secure Parallel Computation on Privately Partitioned Data and Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#secure-parallel-computation-on-privately-partitioned-data-and-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#secure-parallel-computation-on-privately-partitioned-data-and-applications)
### Authors
* Nuttapong Attrapadung, AIST, Tokyo, Japan
* Hiraku Morita, University of St. Gallen, St. Gallen, Switzerland
* Kazuma Ohara, AIST, Tokyo, Japan
* Jacob C. N. Schuldt, AIST, Tokyo, Japan
* Tadanori Teruya, AIST, Tokyo, Japan
* Kazunari Tozawa, The University of Tokyo, Tokyo, Japan
### Abstract
> Parallel computation is an important aspect of multi-party computation, not only in terms of improving efficiency, but also in terms of providing privacy for computation involving conditional branching based on private data. While applying multi-party computation in parallel over several sets of input data is straightforward if the partitioning of the input data into sets is publicly known, the problem becomes much more challenging when this partitioning is private. This setting is relevant to broad class of secure computations, in particular to secure graph and database analysis in which the underlying data (graph or database) is private. In this paper, we consider a general class of functions which can be expressed via the iterative evaluation of a binary associative operation, and propose efficient protocols for evaluating such functions in parallel over privately partitioned input data. Our protocols are optimal in terms of the required number of evaluations of the underlying binary operation (i.e.\ N-1 evaluations for total input size N), while simultaneously achieving a round complexity which is only logarithmic in the total size of the input data (i.e.\ O(łog N)).   Applying our protocols to specific functions result in concrete improvements compared to dedicated protocols from previous works. For example, we improve upon the previously best known protocols for simple functionalities such as (grouped) summation and (grouped) max, as well as the secure graph analysis protocols by Nayak et al. ~(S&P'15), which all requires O(N łog N) evaluations of their respective underlying operations to achieve a O(łog N) round complexity. While our protocols achieve the same asymptotic performance as the shortest path algorithms by Anagreh et al. ~(Cryptography'21), we achieve better concrete performance. Lastly, considering shortest path computations on a weighted graph via the Bellman-Ford algorithm, we reduce the communication complexity by 2.4\sim 5.4 compared to the recent results by Araki et al. \ (CCS'21) on large-scale graphs of thousand nodes and edges. Besides this, we achieve efficient protocols for functions not considered previously, such as ArgMax, first/last projections, and list concatenation.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560695](https://doi.org/10.1145/3548606.3560695)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560695](https://dl.acm.org/doi/pdf/10.1145/3548606.3560695)
## Thora: Atomic and Privacy-Preserving Multi-Channel Updates.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#thora-atomic-and-privacy-preserving-multi-channel-updates)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#thora-atomic-and-privacy-preserving-multi-channel-updates)
### Authors
* Lukas Aumayr, TU Wien, Vienna, Austria
* Kasra Abbaszadeh, University of Maryland, College Park, MD, USA
* Matteo Maffei, Christian Doppler Laboratory Blockchain Technologies for the Internet of Things & TU Wien, Vienna, Austria
### Abstract
> Most blockchain-based cryptocurrencies suffer from a heavily limited transaction throughput, which is a barrier to their growing adoption. Payment channel networks (PCNs) are one of the promising solutions to this problem. PCNs reduce the on-chain load of transactions and increase the throughput by processing many payments off-chain. In fact, any two users connected via a path of payment channels (i.e., joint addresses between the two channel end-points) can perform payments, and the underlying blockchain is used only when there is a dispute between users. Unfortunately, payments in PCNs can only be conducted securely along a path, which prevents the design of many interesting applications. Moreover, the most widely used implementation, the Lightning Network in Bitcoin, suffers from a collateral lock time linear in the path length, it is affected by security issues, and it relies on specific scripting features called Hash Timelock Contracts that hinders the applicability of the underlying protocol in other blockchains. In this work, we present Thora, the first Bitcoin-compatible off-chain protocol that enables the atomic update of arbitrary channels (i.e., not necessarily forming a path). This enables the design of a number of new off-chain applications, such as payments across different PCNs sharing the same blockchain, secure and trustless crowdfunding, and channel rebalancing. Our construction requires no specific scripting functionalities other than digital signatures and timelocks, thereby being applicable to a wider range of blockchains. We formally define security and privacy in the Universal Composability framework and show that our cryptographic protocol is a realization thereof. In our performance evaluation, we show that our construction requires only constant collateral, independently from the number of channels, and has only a moderate off-chain communication as well as computation overhead.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560556](https://doi.org/10.1145/3548606.3560556)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560556](https://dl.acm.org/doi/pdf/10.1145/3548606.3560556)
## Sleepy Channels: Bi-directional Payment Channels without Watchtowers.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sleepy-channels-bi-directional-payment-channels-without-watchtowers)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sleepy-channels-bi-directional-payment-channels-without-watchtowers)
### Authors
* Lukas Aumayr, TU Wien, Vienna, Austria
* Sri AravindaKrishnan Thyagarajan, Carnegie Mellon University, Pittsburgh, PA, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
* Matteo Maffei, Christian Doppler Laboratory Blockchain Technologies for the Internet of Things & TU Wien, Vienna, Austria
### Abstract
> Payment channels (PC) are a promising solution to the scalability issue of cryptocurrencies, allowing users to perform the bulk of the transactions off-chain without needing to post everything on the blockchain. Many PC proposals however, suffer from a severe limitation: Both parties need to constantly monitor the blockchain to ensure that the other party did not post an outdated transaction. If this event happens, the honest party needs to react promptly and engage in a punishment procedure. This means that prolonged absence periods (e.g., a power outage) may be exploited by malicious users. As a mitigation, the community has introduced watchtowers, a third-party monitoring the blockchain on behalf of off-line users. Unfortunately, watchtowers are either trusted, which is critical from a security perspective, or they have to lock a certain amount of coins, called collateral, for each monitored PC in order to be held accountable, which is financially infeasible for a large network. We present Sleepy Channels, the first bi-directional PC protocol without watchtowers (or any other third party) that supports an unbounded number of payments and does not require parties to be persistently online. The key idea is to confine the period in which PC updates can be validated on-chain to a short, pre-determined time window, which is when the PC parties have to be online. This behavior is incentivized by letting the parties lock a collateral in the PC, which can be adjusted depending on their mutual trust and which they get back much sooner if they are online during this time window. Our protocol is compatible with any blockchain that is capable of verifying digital signatures (e.g., Bitcoin), as shown by our proof of concept. Moreover, our experimental results show that Sleepy Channels impose a communication and computation overhead similar to state-of-the-art PC protocols while removing watchtower's collateral and fees for the monitoring service.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559370](https://doi.org/10.1145/3548606.3559370)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559370](https://dl.acm.org/doi/pdf/10.1145/3548606.3559370)
## On the Adaptive Security of the Threshold BLS Signature Scheme.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-adaptive-security-of-the-threshold-bls-signature-scheme)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-adaptive-security-of-the-threshold-bls-signature-scheme)
### Authors
* Renas Bacho, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
### Abstract
> Threshold signatures are a crucial tool for many distributed protocols. As shown by Cachin, Kursawe, and Shoup (PODC '00), schemes with unique signatures are of particular importance, as they allow to implement distributed coin flipping very efficiently and without any timing assumptions. This makes them an ideal building block for (inherently randomized) asynchronous consensus protocols. The threshold-BLS signature of Boldyreva (PKC '03) is both unique and very compact, but unfortunately lacks a security proof against adaptive adversaries. Thus, current consensus protocols either rely on less efficient alternatives or are not adaptively secure. In this work, we revisit the security of the threshold BLS signature by showing the following results, assuming t adaptive corruptions: - We give a modular security proof that follows a two-step approach: 1) We introduce a new security notion for distributed key generation protocols (DKG). We show that it is satisfied by several protocols that previously only had a static security proof. 2) Assuming any DKG protocol with this property, we then prove unforgeability of the threshold BLS scheme. Our reductions are tight and can be used to substantiate real-world parameter choices. - To justify our use of strong assumptions such as the algebraic group model (AGM) and the hardness of one-more-discrete logarithm (OMDL), we prove an impossibility result: Even in the AGM, a strong interactive assumption is required in order to prove the scheme secure.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560656](https://doi.org/10.1145/3548606.3560656)
## Secret-Shared Joins with Multiplicity from Aggregation Trees.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#secret-shared-joins-with-multiplicity-from-aggregation-trees)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#secret-shared-joins-with-multiplicity-from-aggregation-trees)
### Authors
* Saikrishna Badrinarayanan, Snap, Palo Alto, CA, USA
* Sourav Das, University of Illinois Urbana Champaign, Champaign, IL, USA
* Gayathri Garimella, Oregon State University, Corvallis, OR, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, CA, USA
* Peter Rindal, Visa Research, Palo Alto, CA, USA
### Abstract
> We present novel protocols to compute SQL-like join operations on secret shared database tables with non-unique join keys. Previous approaches to the problem had the restriction that the join keys of both the input tables must be unique or had quadratic overhead. Our work lifts this restriction, allowing one or both of the secret shared input tables to have an unknown and unbounded number of repeating join keys while achieving efficient O(n log n) asymptotic communication/computation and O(log n) rounds of interaction, independent of the multiplicity of the keys.   We present two join protocols, Join-OM and Join-MM. The first, Join-OM is optimized for the case where one table has a unique primary key while the second, Join-MM is for the more general setting where both tables contain duplicate keys. Both protocols require O(n log n) time and O(log n) rounds to join two tables of size n. Our framework for computing joins requires an efficient sorting protocol and generic secure computation for circuits. We concretely instantiate our protocols in the honest majority three-party setting.   Our join protocols are built around an efficient method to compute structured aggregations over a secret shared input vector V in D^n. If the parties have another secret-shared vector of control bits B in 0, 1 ^n to partition V into sub-vectors (that semantically relates to the join operations). A structured aggregation computes a secret shared vector V' in D^n where every sub-vector (V_b, ..., V_e) (defined by the control bits) is aggregated as V_i'= V_b op ... op V_i for i in b, ..., e according to some user-defined operator op. Critically, the b, e indices that partition the vector are secret. It's trivial to compute aggregations by sequentially processing the input vector and control bits. This would require O(n) rounds and would be very slow due to network latency. We introduce Aggregation Trees as a general technique to compute aggregations in O(log n) rounds. For our purpose of computing joins, we instantiate op in copy previous value, add, but we believe that this technique is quite powerful and can find applications in other useful settings.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560670](https://doi.org/10.1145/3548606.3560670)
## META-BTS: Bootstrapping Precision Beyond the Limit.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#meta-bts-bootstrapping-precision-beyond-the-limit)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#meta-bts-bootstrapping-precision-beyond-the-limit)
### Authors
* Youngjin Bae, CryptoLab. Inc., Seoul, Republic of Korea
* Jung Hee Cheon, The Seoul National University & CryptoLab. Inc., Seoul, Republic of Korea
* Wonhee Cho, The Seoul National University, Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab. Inc., Seoul, Republic of Korea
* Taekyung Kim, CryptoLab. Inc., Seoul, Republic of Korea
### Abstract
> Bootstrapping, which enables the full homomorphic encryption scheme that can perform an infinite number of operations by restoring the modulus of the ciphertext with a small modulus, is an essential step in homomorphic encryption. However, bootstrapping is the most time and memory consuming of all homomorphic operations. As we increase the precision of bootstrapping, a large amount of computational resources is required. Specifically, for any of the previous bootstrap designs, the precision of bootstrapping is limited by rescaling precision.   In this paper, we propose a new bootstrapping algorithm of the Cheon-Kim-Kim-Song (CKKS) \citeCKKS17 scheme to use a known bootstrapping algorithm repeatedly, so called Meta-BTS. By repeating the original bootstrapping operation twice, one can obtain another bootstrapping with its precision essentially doubled; it can be generalized to be k-fold bootstrapping operations for some k>1 while the ciphertext size is large enough. Our algorithm overcomes the precision limitation given by the rescale operation.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560696](https://doi.org/10.1145/3548606.3560696)
## i-TiRE: Incremental Timed-Release Encryption or How to use Timed-Release Encryption on Blockchains?
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#i-tire-incremental-timed-release-encryption-or-how-to-use-timed-release-encryption-on-blockchains)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#i-tire-incremental-timed-release-encryption-or-how-to-use-timed-release-encryption-on-blockchains)
### Authors
* Leemon Baird, Swirlds Labs, Richardson, TX, USA
* Pratyay Mukherjee, Swirlds Labs, Richardson, TX, USA
* Rohit Sinha, Swirlds Labs, Richardson, TX, USA
### Abstract
> Timed-release encryption can encrypt a message to a future time such that it can only be decrypted after that time. Potential applications include sealed bid auctions, scheduled confidential transactions, and digital time capsules. To enable such applications as decentralized smart contracts, we explore how to use timed-release encryption on blockchains.   Practical constructions in the literature rely on a trusted server (or servers in a threshold setting), which periodically publishes an epoch-specific decryption key based on a long-term secret. Their main idea is to model time periods or epochs as identities in an identity-based encryption scheme. However, these schemes suffer from a fatal flaw: an epoch's key does not let us decrypt ciphertexts locked to prior epochs. Paterson and Quaglia [SCN'10] address this concern by having encryption specify a range of epochs when decryption is allowed. However, we are left with an efficiency concern: in each epoch, the server(s) must publish (via a smart contract transaction) a decryption key of size logarithmic in the lifetime (total number of epochs). For instance, on Ethereum, for a modest lifetime spanning 2 years of 1-minute long epochs, a server must spend over \6 in gas fees, every minute; this cost multiplies with the number of servers in a threshold setting.  We propose a novel timed-release encryption scheme, where a decryption key, while logarithmic in size, allows incremental updates, wherein a short update key (single group element) is sufficient to compute the successive decryption key; our decryption key lets the client decrypt ciphertexts locked to any prior epoch. This leads to significant reduction is gas fees, for instance, only \0.30 in the above setting. Moreover, ciphertexts are also compact (logarithmic in the total lifetime), and encryption and decryption are on the order of few milliseconds. Furthermore, we decentralize the trust among a number of servers, so as to tolerate up to a threshold number of (malicious) corruptions.   Our construction is based on bilinear pairing, and adapts ideas from Canetti et al.'s binary tree encryption [Eurocypt 2003] and Naor et al.'s distributed pseudorandom functions [Eurocrypt 1999].

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560704](https://doi.org/10.1145/3548606.3560704)
## Membership Inference Attacks and Generalization: A Causal Perspective.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#membership-inference-attacks-and-generalization-a-causal-perspective)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#membership-inference-attacks-and-generalization-a-causal-perspective)
### Authors
* Teodora Baluta, National University of Singapore, Singapore, Singapore
* Shiqi Shen, National University of Singapore, Singapore, Singapore
* S. Hitarth, Hong Kong University of Science and Technology & National University of Singapore, Hong Kong, Hong Kong
* Shruti Tople, Microsoft Research, Cambridge, United Kingdom
* Prateek Saxena, National University of Singapore, Singapore, Singapore
### Abstract
> Membership inference (MI) attacks highlight a privacy weakness in present stochastic training methods for neural networks. It is not well understood, however, why they arise. Are they a natural consequence of imperfect generalization only? Which underlying causes should we address during training to mitigate these attacks? Towards answering such questions, we propose the first approach to explain MI attacks and their connection to generalization based on principled causal reasoning. We offer causal graphs that quantitatively explain the observed MI attack performance achieved for 6 attack variants. We refute several prior non-quantitative hypotheses that over-simplify or over-estimate the influence of underlying causes, thereby failing to capture the complex interplay between several factors. Our causal models also show a new connection between generalization and MI attacks via their shared causal factors. Our causal models have high predictive power (0.90), i.e., their analytical predictions match with observations in unseen experiments often, which makes analysis via them a pragmatic alternative.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560694](https://doi.org/10.1145/3548606.3560694)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560694](https://dl.acm.org/doi/pdf/10.1145/3548606.3560694)
## Tidy: Symbolic Verification of Timed Cryptographic Protocols.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#tidy-symbolic-verification-of-timed-cryptographic-protocols)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#tidy-symbolic-verification-of-timed-cryptographic-protocols)
### Authors
* Gilles Barthe, MPI-SP & IMDEA Software Institute, Bochum, Germany
* Ugo Dal Lago, University of Bologna & INRIA Sophia Antipolis, Bologna, Germany
* Giulio Malavolta, MPI-SP, Bochum, Germany
* Itsaka Rakotonirina, MPI-SP, Bochum, Germany
### Abstract
> Timed cryptography refers to cryptographic primitives designed to meet their security goals only for a short (polynomial) amount of time. Popular examples include timed commitments and verifiable delay functions. Such primitives are commonly used to guarantee fairness in multiparty protocols ("either none or all parties obtain the output of the protocol'') without relying on any trusted party. Despite their recent surge in popularity, timed cryptographic protocols remain out of scope of current symbolic verification tools, which idealise cryptographic primitives as algebraic operations, and thus do not consider fine-grained notions of time. In this paper, we develop, implement, and evaluate a symbolic approach for reasoning about protocols built from timed cryptographic primitives. First, we introduce a timed extension of the applied pi-calculus, a common formalism to specify cryptographic protocols. Then, we develop a logic for timed hyperproperties capturing many properties of interest, such as timeliness or time-limited indistinguishability. We exemplify the usefulness of our approach by modelling a variety of cryptographic protocols, such as distributed randomness generation, sealed-bid auctions, and contract signing. We also study the decidability of timed security properties. On the theoretical side, we reduce the decision of hyperproperties expressed in our logic to a form of constraint solving generalising standard notions in protocol analysis, and showcase the higher complexity of the problem compared to similar well-established logics through complexity lower bounds. On the automation side, we mechanise proofs of timed safety properties by relying on the Tamarin tool as a backend, a popular symbolic protocol analyser, and validate several examples with our approach.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559343](https://doi.org/10.1145/3548606.3559343)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559343](https://dl.acm.org/doi/pdf/10.1145/3548606.3559343)
## A Wolf in Sheep's Clothing: Spreading Deadly Pathogens Under the Disguise of Popular Music.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-wolf-in-sheeps-clothing-spreading-deadly-pathogens-under-the-disguise-of-popular-music)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-wolf-in-sheeps-clothing-spreading-deadly-pathogens-under-the-disguise-of-popular-music)
### Authors
* Anomadarshi Barua, University of California, Irvine, Irvine, CA, USA
* Yonatan Gizachew Achamyeleh, University of California, Irvine, Irvine, CA, USA
* Mohammad Abdullah Al Faruque, University of California, Irvine, Irvine, CA, USA
### Abstract
> A Negative Pressure Room (NPR) is an essential requirement by the Bio-Safety Levels (BSLs) in biolabs or infectious-control hospitals to prevent deadly pathogens from being leaked from the facility. An NPR maintains a negative pressure inside with respect to the outside reference space so that microbes are contained inside of an NPR. Nowadays, differential pressure sensors (DPSs) are utilized by the Building Management Systems (BMSs) to control and monitor the negative pressure in an NPR. This paper demonstrates a non-invasive and stealthy attack on NPRs by spoofing a DPS at its resonant frequency. Our contributions are: (1) We show that DPSs used in NPRs typically have resonant frequencies in the audible range. (2) We use this finding to design malicious music to create resonance in DPSs, resulting in an overshooting in the DPS's normal pressure readings. (3) We show how the resonance in DPSs can fool the BMSs so that the NPR turns its negative pressure to a positive one, causing a potential leak of deadly microbes from NPRs. We do experiments on 8 DPSs from 5 different manufacturers to evaluate their resonant frequencies considering the sampling tube length and find resonance in 6 DPSs. We can achieve a 2.5 Pa change in negative pressure from a ~7 cm distance when a sampling tube is not present and from a ~2.5 cm distance for a 1 m sampling tube length. We also introduce an interval-time variation approach for an adversarial control over the negative pressure and show that the forged pressure can be varied within 12 - 33 Pa. Our attack is also capable of attacking multiple NPRs simultaneously. Moreover, we demonstrate our attack at a real-world NPR located in an anonymous bioresearch facility, which is FDA approved and follows CDC guidelines. We also provide countermeasures to prevent the attack.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560643](https://doi.org/10.1145/3548606.3560643)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560643](https://dl.acm.org/doi/pdf/10.1145/3548606.3560643)
## Feta: Efficient Threshold Designated-Verifier Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#feta-efficient-threshold-designated-verifier-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#feta-efficient-threshold-designated-verifier-zero-knowledge-proofs)
### Authors
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Robin Jadoul, KU Leuven, Leuven, Belgium
* Emmanuela Orsini, KU Leuven, Leuven, Belgium
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Nigel P. Smart, KU Leuven, Leuven, Belgium
### Abstract
> Zero-Knowledge protocols have increasingly become both popular and practical in recent years due to their applicability in many areas such as blockchain systems. Unfortunately, public verifiability and small proof sizes of zero-knowledge protocols currently come at the price of strong assumptions, large prover time, or both, when considering statements with millions of gates. In this regime, the most prover-efficient protocols are in the designated verifier setting, where proofs are only valid to a single party that must keep a secret state. In this work, we bridge this gap between designated-verifier proofs and public verifiability by distributing the verifier efficiently. Here, a set of verifiers can then verify a proof and, if a given threshold t of the n verifiers is honest and trusted, can act as guarantors for the validity of a statement. We achieve this while keeping the concrete efficiency of current designated-verifier proofs, and present constructions that have small concrete computation and communication cost. We present practical protocols in the setting of threshold verifiers with t<n/4 and t<n/3, for which we give performance figures, showcasing the efficiency of our approach.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559354](https://doi.org/10.1145/3548606.3559354)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559354](https://dl.acm.org/doi/pdf/10.1145/3548606.3559354)
## Distributed, Private, Sparse Histograms in the Two-Server Model.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#distributed-private-sparse-histograms-in-the-two-server-model)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#distributed-private-sparse-histograms-in-the-two-server-model)
### Authors
* James Bell, Google, London, United Kingdom
* Adrià Gascón, Google, New York, NY, USA
* Badih Ghazi, Google, Mountain View, CA, USA
* Ravi Kumar, Google, Mountain View, CA, USA
* Pasin Manurangsi, Google, Bangkok, Thailand
* Mariana Raykova, Google, New York, NY, USA
* Phillipp Schoppmann, Google, New York, NY, USA
### Abstract
> We consider the computation of sparse, (ε, ϑ)-differentially private~(DP) histograms in the two-server model of secure multi-party computation~(MPC), which has recently gained traction in the context of privacy-preserving measurements of aggregate user data. We introduce protocols that enable two semi-honest non-colluding servers to compute histograms over the data held by multiple users, while only learning a private view of the data. Our solution achieves the same asymptotic l∞-error of O(log(1/ϑoverε) as in the central model of DP, but without relying on a trusted curator. The server communication and computation costs of our protocol are independent of the number of histogram buckets, and are linear in the number of users, while the client cost is independent of the number of users, ε, and ϑ. Its linear dependence on the number of users lets our protocol scale well, which we confirm using microbenchmarks: for a billion users, ε = 0.5, and ϑ = 10-11, the per-user cost of our protocol is only 1.08 ms of server computation and 339 bytes of communication. In contrast, a baseline protocol using garbled circuits only allows up to 106 users, where it requires 600 KB communication per user.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559383](https://doi.org/10.1145/3548606.3559383)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559383](https://dl.acm.org/doi/pdf/10.1145/3548606.3559383)
## Threshold Cryptography as a Service (in the Multiserver and YOSO Models).
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#threshold-cryptography-as-a-service-in-the-multiserver-and-yoso-models)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#threshold-cryptography-as-a-service-in-the-multiserver-and-yoso-models)
### Authors
* Fabrice Benhamouda, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Hugo Krawczyk, Algorand Foundation, New York, NY, USA
* Alex Miao, No affiliation, New York, NY, USA
* Tal Rabin, University of Pennsylvania & Algorand Foundation, New York, NY, USA
### Abstract
> We consider large deployments of threshold cryptographic services that can run in traditional multi-server settings and, at a much larger scale, in blockchain environments. We present a set of techniques that improve performance and meet the requirements of settings with large number of servers and high rate of threshold operations. More fundamentally, our techniques enable threshold cryptographic applications to run in more challenging decentralized permissionless systems, such as contemporary blockchains. In particular, we design and implement a novel threshold solution for the recently introduced YOSO (You Only Speak Once) model. The model builds on ever changing, unpredictable committees that perform ephemeral roles in a way that evades targeting by attackers and enables virtually unlimited scalability in very large networks. Our solution allows for the maintenance of system-wide keys that can be generated, used and proactivized as needed. The specific techniques build on optimized protocols for multi-secret multi-dealer verifiable secret sharing and their adaptation to the YOSO model. We demonstrate the practicality of our solutions by reporting on an end-to-end implementation of a proactive re-sharing protocol in the YOSO model, showing benchmarks for committees of sizes up to 500 nodes. For traditional multi-server settings, we obtain significant speedups in settings where dealers process many secrets simultaneously (say, to generate or proactivize many keys at the same time), e.g., we show 5X improvements relative to classical Pedersen VSS for 15 servers and 50 secrets, and 48X for 500 servers and 1000 secrets.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559397](https://doi.org/10.1145/3548606.3559397)
## Privacy Limitations of Interest-based Advertising on The Web: A Post-mortem Empirical Analysis of Google's FLoC.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#privacy-limitations-of-interest-based-advertising-on-the-web-a-post-mortem-empirical-analysis-of-googles-floc)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#privacy-limitations-of-interest-based-advertising-on-the-web-a-post-mortem-empirical-analysis-of-googles-floc)
### Authors
* Alex Berke, MIT Media Lab, Cambridge, MA, USA
* Dan Calacci, MIT Media Lab, Cambridge, MA, USA
### Abstract
> In 2020, Google announced it would disable third-party cookies in the Chrome browser to improve user privacy. In order to continue to enable interest-based advertising while mitigating risks of individualized user tracking, Google proposed FLoC. The FLoC algorithm assigns users to "cohorts" that represent groups of users with similar browsing behaviors so that ads can be served to users based on their cohort. In 2022, after testing FLoC in a real world trial, Google canceled the proposal with little explanation in favor of another way to enable interest-based advertising. This work provides a post-mortem analysis of two critical privacy risks for FloC by applying an implementation of FLoC to a real-world browsing history dataset collected from over 90,000 U.S. devices over a one year period. First, we show how, contrary to its privacy goals, FLoC would have enabled individualized cross-site user tracking by providing a unique identifier for users available across sites, similar to the third-party cookies FLoC was meant to be an improvement over. We show how FLoC cohort ID sequences observed over time can provide this unique identifier to trackers, even with third-party cookies disabled. We estimate the number of users in our dataset that could be uniquely identified by FLoC IDs is more than 50% after 3 weeks and more than 95% after 4 weeks. We also show how these risks increase when cohort data are combined with browser fingerprinting, and how our results are conservative underestimates of the risks FLoC would have posed in a real-world deployment. Second, we examine the risk of FLoC leaking sensitive demographic information about users. Although we find statistically significant differences in browsing behaviors between demographic groups, we do not find that FLoC significantly risks exposing race or income information about users in our dataset. Our contributions provide insights and example analyses for future novel approaches that seek to protect user privacy while monetizing the web.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560626](https://doi.org/10.1145/3548606.3560626)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560626](https://dl.acm.org/doi/pdf/10.1145/3548606.3560626)
## JIT-Picking: Differential Fuzzing of JavaScript Engines.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#jit-picking-differential-fuzzing-of-javascript-engines)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#jit-picking-differential-fuzzing-of-javascript-engines)
### Authors
* Lukas Bernhard, Ruhr University Bochum, Bochum, Germany
* Tobias Scharnowski, Ruhr University Bochum, Bochum, Germany
* Moritz Schloegel, Ruhr University Bochum, Bochum, Germany
* Tim Blazytko, Ruhr University Bochum, Bochum, Germany
* Thorsten Holz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Modern JavaScript engines that power websites and even full applications on the Web are driven by the need for an increasingly fast and snappy user experience. These engines use several complex and potentially error-prone mechanisms to optimize their performance. Unsurprisingly, the inevitable complexity results in a huge attack surface and varioustypes of software vulnerabilities. On the defender's side, fuzz testing has proven to be an invaluable tool for uncovering different kinds of memory safety violations. Although it is difficult to test interpreters and JIT compilers in an automated way, recent proposals for input generation based on grammars or target-specific intermediate representations helped uncovering many software faults. However, subtle logic bugs and miscomputations that arise from optimization passes in JIT engines continue to elude state-of-the-art testing methods. While such flaws might seem unremarkable at first glance, they are often still exploitable in practice. In this paper, we propose a novel technique for effectively uncovering this class of subtle bugs during fuzzing. The key idea is to take advantage of the tight coupling between a JavaScript engine's interpreter and its corresponding JIT compiler as a domain-specific and generic bug oracle, which in turn yields a highly sensitive fault detection mechanism. We have designed and implemented a prototype of the proposed approach in a tool called JIT-Picker. In an empirical evaluation, we show that our method enables us to detect subtle software faults that prior work missed. In total, we uncovered 32 bugs that were not publicly known and received a $10.000 bug bounty from Mozilla as a reward for our contributions to JIT engine security.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560624](https://doi.org/10.1145/3548606.3560624)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560624](https://dl.acm.org/doi/pdf/10.1145/3548606.3560624)
## A Symbolic Analysis of Privacy for TLS 1.3 with Encrypted Client Hello.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-symbolic-analysis-of-privacy-for-tls-1-3-with-encrypted-client-hello)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-symbolic-analysis-of-privacy-for-tls-1-3-with-encrypted-client-hello)
### Authors
* Karthikeyan Bhargavan, Inria Paris, Paris, France
* Vincent Cheval, Inria Paris, Paris, France
* Christopher Wood, Cloudflare, San Francisco, CA, USA
### Abstract
> TLS 1.3, the newest version of the Transport Layer Security (TLS) protocol, provides strong authentication and confidentiality guarantees that have been comprehensively analyzed in a variety of formal models. However, despite its controversial use of handshake meta-data encryption, the privacy guarantees of TLS 1.3 remain weak and poorly understood. For example, the protocol reveals the identity of the target server to network attackers, allowing the passive surveillance and active censorship of TLS connections. To close this gap, the IETF TLS working group is standardizing a new privacy extension called Encrypted Client Hello (ECH, previously called ESNI), but the absence of a formal privacy model makes it hard to verify that this extension works. Indeed, several early drafts of ECH were found to be vulnerable to active network attacks. In this paper, we present the first mechanized formal analysis of privacy properties for the TLS 1.3 handshake. We study all standard modes of TLS 1.3, with and without ECH, using the symbolic protocol analyzer ProVerif. We discuss attacks on ECH, some found during the course of this study, and show how they are accounted for in the latest version. Our analysis has helped guide the standardization process for ECH and we provide concrete privacy recommendations for TLS implementors. We also contribute the most comprehensive model of TLS 1.3 to date, which can be used by designers experimenting with new extensions to the protocol. Ours is one of the largest privacy proofs attempted using an automated verification tool and may be of general interest to protocol analysts.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559360](https://doi.org/10.1145/3548606.3559360)
## Power Contracts: Provably Complete Power Leakage Models for Processors.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#power-contracts-provably-complete-power-leakage-models-for-processors)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#power-contracts-provably-complete-power-leakage-models-for-processors)
### Authors
* Roderick Bloem, Graz University of Technology, Graz, Austria
* Barbara Gigerl, Graz University of Technology, Graz, Austria
* Marc Gourjon, Hamburg University of Technology & NXP Semiconductors, Hamburg, Germany
* Vedad Hadzic, Graz University of Technology, Graz, Austria
* Stefan Mangard, Graz University of Technology, Graz, Austria
* Robert Primas, Graz University of Technology, Graz, Austria
### Abstract
> The protection of cryptographic software implementations against power-analysis attacks is critical for applications in embedded systems. A commonly used algorithmic countermeasure against these attacks is masking, a secret-sharing scheme that splits a sensitive computation into computations on multiple random shares. In practice, the security of masking schemes relies on several assumptions that are often violated by microarchitectural side-effects of CPUs. Many past works address this problem by studying these leakage effects and building corresponding leakage models that can then be integrated into a software verification workflow. However, these models have only been derived empirically, putting in question the otherwise rigorous security statements made with verification. We solve this problem in two steps. First, we introduce a contract layer between the (CPU) hardware and the software that allows the specification of microarchitectural side-effects on masked software in an intuitive language. Second, we present a method for proving the correspondence between contracts and CPU netlists to ensure the completeness of the specified leakage models. Then, any further security proofs only need to happen between software and contract, which brings benefits such as reduced verification runtime, improved user experience, and the possibility of working with vendor-supplied contracts of CPUs whose design is not available on netlist-level due to IP restrictions. We apply our approach to the popular RISC-V IBEX core, provide a corresponding formally verified contract, and describe how this contract could be used to verify masked software implementations.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560600](https://doi.org/10.1145/3548606.3560600)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560600](https://dl.acm.org/doi/pdf/10.1145/3548606.3560600)
## Themis: An On-Site Voting System with Systematic Cast-as-intended Verification and Partial Accountability.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#themis-an-on-site-voting-system-with-systematic-cast-as-intended-verification-and-partial-accountability)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#themis-an-on-site-voting-system-with-systematic-cast-as-intended-verification-and-partial-accountability)
### Authors
* Mikael Bougon, IDEMIA, Paris, France
* Hervé Chabanne, IDEMIA, Paris, France
* Véronique Cortier, Université de Lorraine, Inria, CNRS, Nancy, France
* Alexandre Debant, Université de Lorraine, Inria, CNRS, Nancy, France
* Emmanuelle Dottax, IDEMIA, Bordeaux, France
* Jannik Dreier, Université de Lorraine, Inria, CNRS, Nancy, France
* Pierrick Gaudry, Université de Lorraine, Inria, CNRS, Nancy, France
* Mathieu Turuani, Université de Lorraine, Inria, CNRS, Nancy, France
### Abstract
> We propose an on-site voting system Themis, that aims at improving security when local authorities are not fully trusted. Voters vote thanks to voting sheets as well as smart cards that produce encrypted ballots. Electronic ballots are systematically audited, without compromising privacy. Moreover, the system includes a precise dispute resolution procedure identifying misbehaving parties in most cases. We conduct a full formal analysis of Themis using ProVerif, with a novel approach in order to cover the modular arithmetic needed in our protocol. In order to evaluate the usability of our system, we organized a voting experiment on a (small) group of voters.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560563](https://doi.org/10.1145/3548606.3560563)
## Victory by KO: Attacking OpenPGP Using Key Overwriting.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#victory-by-ko-attacking-openpgp-using-key-overwriting)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#victory-by-ko-attacking-openpgp-using-key-overwriting)
### Authors
* Lara Bruseghini, ETH Zurich & Proton AG, Zurich, Switzerland
* Daniel Huigens, Proton AG, Geneva, Switzerland
* Kenneth G. Paterson, ETH Zurich, Zurich, Switzerland
### Abstract
> We present a set of attacks on the OpenPGP specification and implementations of it which result in full recovery of users' private keys. The attacks exploit the lack of cryptographic binding between the different fields inside an encrypted private key packet, which include the key algorithm identifier, the cleartext public parameters, and the encrypted private parameters. This allows an attacker who can overwrite certain fields in OpenPGP key packets to perform cross-algorithm attacks, causing a user's software to, for example, misinterpret an ECC private key as being a DSA key. It also allows an attacker to replace the legitimate public parameters with adversarially chosen ones, e.g. allowing them to select the DSA group. We refer to this class of attacks as Key Overwriting (KO) attacks. We provide a detailed analysis of the vulnerability of different OpenPGP libraries to KO attacks, showing in particular that in some cases additional key validation steps performed by libraries that should prevent the attacks in fact allow variant attacks. We also assess the applicability of KO attacks in the context of specific OpenPGP-based applications that reflect different threat models. Finally, we explain how KO attacks can be completely prevented (and the need for key validation obsoleted) at the OpenPGP specification level by expanding the existing proposal of using AEAD schemes for key packet protection to have all the security-relevant public fields included as Associated Data.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559363](https://doi.org/10.1145/3548606.3559363)
## Do Opt-Outs Really Opt Me Out?
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#do-opt-outs-really-opt-me-out)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#do-opt-outs-really-opt-me-out)
### Authors
* Duc Bui, University of Michigan, Ann Arbor, MI, USA
* Brian Tang, University of Michigan, Ann Arbor, MI, USA
* Kang G. Shin, University of Michigan, Ann Arbor, MI, USA
### Abstract
> Online trackers, such as advertising and analytics services, have provided users with choices to opt out of their tracking and data collection to mitigate the users' concerns about increased privacy risks. While opt-out choices of online services for the cookies placed on their own websites have been examined before, the choices provided by trackers for their third-party tracking services on publisher websites have been largely overlooked. There is no guarantee that a tracker's opt-out options would faithfully follow the statements in its privacy policy. To address this concern, we develop an automated framework, called OptOutCheck, that analyzes (in)consistencies between trackers' data practices and the opt-out choice statements in their privacy policies. We create sentence-level classifiers, which achieve ≥ 84.6% precision on previously-unseen statements, to extract the opt-out policies that state neither tracking nor data collection for opted-out users from trackers' privacy-policy documents. tOptOutCheck analyzes both tracker and publisher websites to detect opt-out buttons, perform the opt-out, and extract the data flows to the tracker servers after the user opts out. Finally, we formalize the opt-out policies and data flows to derive logical conditions to detect the inconsistencies. In a large-scale study of 2.9k popular trackers, OptOutCheck detected opt-out choices on 165 trackers and found 11 trackers who exhibited data practices inconsistent with their stated opt-out policies. Since inconsistencies are violations of the trackers' privacy policies and demonstrate data collection without user consent, they are likely to lose users' trust in the online trackers and trigger the necessity of an automatic auditing process.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560574](https://doi.org/10.1145/3548606.3560574)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560574](https://dl.acm.org/doi/pdf/10.1145/3548606.3560574)
## Vizard: A Metadata-hiding Data Analytic System with End-to-End Policy Controls.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#vizard-a-metadata-hiding-data-analytic-system-with-end-to-end-policy-controls)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#vizard-a-metadata-hiding-data-analytic-system-with-end-to-end-policy-controls)
### Authors
* Chengjun Cai, City University of Hong Kong Dongguan Research Institute, Dongguan, China
* Yichen Zang, City University of Hong Kong, Hong Kong, China
* Cong Wang, City University of Hong Kong, Hong Kong, China
* Xiaohua Jia, City University of Hong Kong, Hong Kong, China
* Qian Wang, Wuhan University, Wuhan, China
### Abstract
> Owner-centric control is a widely adopted method for easing owners' concerns over data abuses and motivating them to share their data out to gain collective knowledge. However, while many control enforcement techniques have been proposed, privacy threats due to the metadata leakage therein are largely neglected in existing works. Unfortunately, a sophisticated attacker can infer very sensitive information based on either owners' data control policies or their analytic task participation histories (e.g., participating in a mental illness or cancer study can reveal their health conditions). To address this problem, we introduce Vizard, a metadata-hiding analytic system that enables privacy-hardened and enforceable control for owners. Vizard is built with a tailored suite of lightweight cryptographic tools and designs that help us efficiently handle analytic queries over encrypted data streams coming in real-time (like heart rates). We propose extension designs to further enable advanced owner-centric controls (with AND, OR, NOT operators) and provide owners with release control to additionally regulate how the result should be protected before deliveries. We develop a prototype of Vizard that is interfaced with Apache Kafka, and the evaluation results demonstrate the practicality of Vizard for large-scale and metadata-hiding analytics over data streams.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559349](https://doi.org/10.1145/3548606.3559349)
## Succinct Zero-Knowledge Batch Proofs for Set Accumulators.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#succinct-zero-knowledge-batch-proofs-for-set-accumulators)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#succinct-zero-knowledge-batch-proofs-for-set-accumulators)
### Authors
* Matteo Campanelli, Protocol Labs, San Francisco, CA, USA
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Semin Han, Hanyang University, Seoul, Republic of Korea
* Jihye Kim, Kookmin University, Seoul, Republic of Korea
* Dimitris Kolonelos, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Hyunok Oh, Hanyang University, Seoul, Republic of Korea
### Abstract
> Cryptographic accumulators are a common solution to proving information about a large set S. They allow one to compute a short digest of S and short certificates of some of its basic properties, notably membership of an element. Accumulators also allow one to track set updates: a new accumulator is obtained by inserting/deleting a given element. In this work we consider the problem of generating membership and update proofs for \em batches of elements so that we can succinctly prove additional properties of the elements (i.e., proofs are of constant size regardless of the batch size), and we can preserve privacy. Solving this problem would allow obtaining blockchain systems with improved privacy and scalability.   The state-of-the-art approach to achieve this goal is to combine accumulators (typically Merkle trees) with zkSNARKs. This solution is however expensive for provers and does not scale for large batches of elements. In particular, there is no scalable solution for proving batch membership proofs when we require zero-knowledge (a standard definition of privacy-preserving protocols).   In this work we propose new techniques to efficiently use zkSNARKs with RSA accumulators. We design and implement two main schemes: 1) \harisa, which proves batch membership in zero-knowledge; 2) \insarisa, which proves batch updates. For batch membership, the prover in \harisa is orders of magnitude faster than existing approaches based on Merkle trees (depending on the hash function). For batch updates we get similar cost savings compared to approaches based on Merkle trees; we also improve over the recent solution of Ozdemir et al. [USENIX'20].

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560677](https://doi.org/10.1145/3548606.3560677)
## Widespread Underestimation of Sensitivity in Differentially Private Libraries and How to Fix It.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#widespread-underestimation-of-sensitivity-in-differentially-private-libraries-and-how-to-fix-it)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#widespread-underestimation-of-sensitivity-in-differentially-private-libraries-and-how-to-fix-it)
### Authors
* Sílvia Casacuberta, Harvard University, Cambridge, MA, USA
* Michael Shoemate, Harvard University, Cambridge, MA, USA
* Salil Vadhan, Harvard University, Cambridge, MA, USA
* Connor Wagaman, Boston University, Boston, MA, USA
### Abstract
> We identify a new class of vulnerabilities in implementations of differential privacy. Specifically, they arise when computing basic statistics such as sums, thanks to discrepancies between the implemented arithmetic using finite data types (namely, ints or floats) and idealized arithmetic over the reals or integers. These discrepancies cause the sensitivity of the implemented statistics (i.e., how much one individual's data can affect the result) to be much larger than the sensitivity we expect. Consequently, essentially all differential privacy libraries fail to introduce enough noise to hide individual-level information as required by differential privacy, and we show that this may be exploited in realistic attacks on differentially private query systems. In addition to presenting these vulnerabilities, we also provide a number of solutions, which modify or constrain the way in which the sum is implemented in order to recover the idealized or near-idealized bounds on sensitivity.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560708](https://doi.org/10.1145/3548606.3560708)
## SFuzz: Slice-based Fuzzing for Real-Time Operating Systems.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sfuzz-slice-based-fuzzing-for-real-time-operating-systems)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sfuzz-slice-based-fuzzing-for-real-time-operating-systems)
### Authors
* Libo Chen, Shandong University, SJTU, Qingdao, China
* Quanpu Cai, SJTU, Alibaba Group, Shanghai, China
* Zhenbang Ma, QI-ANXIN, Beijing, China
* Yanhao Wang, QI-ANXIN, Beijing, China
* Hong Hu, Pennsylvania State University, University Park, PA, USA
* Minghang Shen, Tencent Security Xuanwu Lab, Beijing, China
* Yue Liu, Southeast University, QI-ANXIN, Beijing, China
* Shanqing Guo, Shandong University, Qingdao, China
* Haixin Duan, Tsinghua University, Beijing, China
* Kaida Jiang, SJTU, Shanghai, China
* Zhi Xue, SJTU, Shanghai, China
### Abstract
> Real-Time Operating System (RTOS) has become the main category of embedded systems. It is widely used to support tasks requiring real-time response such as printers and switches. The security of RTOS has been long overlooked as it was running in special environments isolated from attackers. However, with the rapid development of IoT devices, tremendous RTOS devices are connected to the public network. Due to the lack of security mechanisms, these devices are extremely vulnerable to a wide spectrum of attacks. Even worse, the monolithic design of RTOS combines various tasks and services into a single binary, which hinders the current program testing and analysis techniques working on RTOS. In this paper, we propose SFuzz, a novel slice-based fuzzer, to detect security vulnerabilities in RTOS. Our insight is that RTOS usually divides a complicated binary into many separated but single-minded tasks. Each task accomplishes a particular event in a deterministic way and its control flow is usually straightforward and independent. Therefore, we identify such code from the monolithic RTOS binary and synthesize a slice for effective testing. Specifically, SFuzz first identifies functions that handle user input, constructs call graphs that start from callers of these functions, and leverages forward slicing to build the execution tree based on the call graphs and pruning the paths independent of external inputs. Then, it detects and handles roadblocks within the coarse-grain scope that hinder effective fuzzing, such as instructions unrelated to the user input. And then, it conducts coverage-guided fuzzing on these code snippets. Finally, SFuzz leverages forward and backward slicing to track and verify each path constraint and determine whether a bug discovered in the fuzzer is a real vulnerability. SFuzz successfully discovered 77 zero-day bugs on 35 RTOS samples, and 67 of them have been assigned CVE or CNVD IDs. Our empirical evaluation shows that SFuzz outperforms the state-of-the-art tools (e.g., UnicornAFL) on testing RTOS.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559367](https://doi.org/10.1145/3548606.3559367)
## Graph Unlearning.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#graph-unlearning)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#graph-unlearning)
### Authors
* Min Chen, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Zhikun Zhang, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Tianhao Wang, University of Virginia, Charlottesville, VA, USA
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Mathias Humbert, University of Lausanne, Lausanne, Switzerland
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### Abstract
> Machine unlearning is a process of removing the impact of some training data from the machine learning (ML) models upon receiving removal requests. While straightforward and legitimate, retraining the ML model from scratch incurs a high computational overhead. To address this issue, a number of approximate algorithms have been proposed in the domain of image and text data, among which SISA is the state-of-the-art solution. It randomly partitions the training set into multiple shards and trains a constituent model for each shard. However, directly applying SISA to the graph data can severely damage the graph structural information, and thereby the resulting ML model utility. In this paper, we propose GraphEraser, a novel machine unlearning framework tailored to graph data. Its contributions include two novel graph partition algorithms and a learning-based aggregation method. We conduct extensive experiments on five real-world graph datasets to illustrate the unlearning efficiency and model utility of GraphEraser. It achieves 2.06x (small dataset) to 35.94x (large dataset) unlearning time improvement. On the other hand, GraphEraser achieves up to 62.5% higher F1 score and our proposed learning-based aggregation method achieves up to 112% higher F1 score. https://github.com/MinChen00/Graph-Unlearning.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559352](https://doi.org/10.1145/3548606.3559352)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559352](https://dl.acm.org/doi/pdf/10.1145/3548606.3559352)
## MetaEmu: An Architecture Agnostic Rehosting Framework for Automotive Firmware.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#metaemu-an-architecture-agnostic-rehosting-framework-for-automotive-firmware)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#metaemu-an-architecture-agnostic-rehosting-framework-for-automotive-firmware)
### Authors
* Zitai Chen, University of Birmingham, Birmingham, United Kingdom
* Sam L. Thomas, BINARLY, Pasadena, CA, USA
* Flavio D. Garcia, University of Birmingham, Birmingham, United Kingdom
### Abstract
> In this paper we present MetaEmu, an architecture-agnostic framework geared towards rehosting and security analysis of automotive firmware. MetaEmu improves over existing rehosting environments in two ways: Firstly, it solves the hitherto open-problem of a lack of generic Virtual Execution Environments (VXEs) by synthesizing processor simulators from Ghidra's language definitions. Secondly, MetaEmu can rehost and analyze multiple targets, each of different architecture, simultaneously, and share analysis facts between each target's analysis environment, a technique we call inter-device analysis. We show that the flexibility afforded by our approach does not lead to a performance trade-off---MetaEmu lifts rehosted firmware to an optimized intermediate representation, and provides performance comparable to existing emulation tools, such as Unicorn. Our evaluation spans five different architectures, bare-metal and RTOS-based firmware, and three kinds of automotive Electronic Control Unit (ECU) from four distinct vendors---none of which can be rehosted or emulated by current tools, due to lack of processor support. Further, we show how MetaEmu enables a diverse set of analyses by implementing a fuzzer, a symbolic executor for solving peripheral access checks, a CAN ID reverse engineering tool, and an inter-device coverage tracker.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559338](https://doi.org/10.1145/3548606.3559338)
## PSI from Ring-OLE.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#psi-from-ring-ole)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#psi-from-ring-ole)
### Authors
* Wutichai Chongchitmate, Chulalongkorn University, Bangkok, Thailand
* Yuval Ishai, Technion, Haifa, Israel
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, CA, USA
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, CA, USA
### Abstract
> Private set intersection (PSI) is one of the most extensively studied instances of secure computation. PSI allows two parties to compute the intersection of their input sets without revealing anything else. Other useful variants include PSI-Payload, where the output includes payloads associated with members of the intersection, and PSI-Sum, where the output includes the sum of the payloads instead of individual ones. In this work, we make two related contributions. First, we construct simple and efficient protocols for PSI and PSI-Payload from a ring version of oblivious linear function evaluation (ring-OLE) that can be efficiently realized using recent ring-LPN based protocols. A standard OLE over a field F allows a sender with a,b F to deliver ax + b to a receiver who holds x F. Ring-OLE generalizes this to a ring F, in particular, a polynomial ring over F. Our second contribution is an efficient general reduction of a variant of PSI-Sum to PSI-Payload and secure inner product. Our protocols have better communication cost than state-of-the-art PSI protocols, especially when requiring security against malicious parties and when allowing input-independent preprocessing. Compared to previous maliciously secure PSI protocols that have a similar computational cost, our online communication is 2x better for small sets (28-212 elements) and 20% better for large sets (220 -224). Our protocol is also simpler to describe and implement. We obtain even bigger improvements over the state of the art (4-5x better running time) for our variant of PSI-Sum.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559378](https://doi.org/10.1145/3548606.3559378)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559378](https://dl.acm.org/doi/pdf/10.1145/3548606.3559378)
## HammerScope: Observing DRAM Power Consumption Using Rowhammer.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hammerscope-observing-dram-power-consumption-using-rowhammer)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hammerscope-observing-dram-power-consumption-using-rowhammer)
### Authors
* Yaakov Cohen, Ben-Gurion University of the Negev & Intel, Beer-Sheva, Israel
* Kevin Sam Tharayil, Georgia Institute of Technology, Atlanta, GA, USA
* Arie Haenel, Jerusalem College of Technology & Intel, Jerusalem, Israel
* Daniel Genkin, Georgia Institute of Technology, Atlanta, GA, USA
* Angelos D. Keromytis, Georgia Institute of Technology, Atlanta, GA, USA
* Yossi Oren, Ben-Gurion University of the Negev & Intel, Beer-Sheva, Israel
* Yuval Yarom, University of Adelaide, Adelaide, SA, Australia
### Abstract
> The constant reduction in memory cell sizes has increased memory density and reduced power consumption, but has also affected its reliability. The Rowhammer attack exploits this reduced reliability to induce bit flips in memory, without directly accessing these bits. Most Rowhammer attacks target software integrity, but some recent attacks demonstrated its use for compromising confidentiality.   Continuing this trend, in this paper we observe that the \rh attack strongly correlates with the memory instantaneous power consumption. We exploit this observation to design HammerScope, a Rowhammer-based attack technique for measuring the power consumption of the memory unit. Because the power consumption correlates with the level of activity of the memory, \hs allows an attacker to infer memory activity.   To demonstrate the offensive capabilities of HammerScope, we use it to mount three information leakage attacks. We first show that \hs can be used to break kernel address-space layout randomization (KASLR). Our second attack uses memory activity as a covert channel for a Spectre attack, allowing us to leak information from the operating system kernel. Finally, we demonstrate the use of HammerScope for performing website fingerprinting, compromising user privacy. Our work demonstrates the importance of finding systematic solutions for Rowhammer attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560688](https://doi.org/10.1145/3548606.3560688)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560688](https://dl.acm.org/doi/pdf/10.1145/3548606.3560688)
## SortingHat: Efficient Private Decision Tree Evaluation via Homomorphic Encryption and Transciphering.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sortinghat-efficient-private-decision-tree-evaluation-via-homomorphic-encryption-and-transciphering)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sortinghat-efficient-private-decision-tree-evaluation-via-homomorphic-encryption-and-transciphering)
### Authors
* Kelong Cong, KU Leuven, Leuven, Belgium
* Debajyoti Das, KU Leuven, Leuven, Belgium
* Jeongeun Park, KU Leuven, Leuven, Belgium
* Hilder V.L. Pereira, KU Leuven, Leuven, Belgium
### Abstract
> Machine learning as a service scenario typically requires the client to trust the server and provide sensitive data in plaintext. However, with the recent improvements in fully homomorphic encryption (FHE) schemes, many such applications can be designed in a privacy-preserving way. In this work, we focus on such a problem, private decision tree evaluation (PDTE) --- where a server has a decision tree classification model, and a client wants to use the model to classify her private data without revealing the data or the classification result to the server. We present an efficient non-interactive design of PDTE, that we call SortingHat, based on FHE techniques. As part of our design, we solve multiple cryptographic problems related to FHE: (1) we propose a fast homomorphic comparison function where one input can be in plaintext format; (2) we design an efficient binary decision tree evaluation technique in the FHE setting, which we call homomorphic traversal, and apply it together with our homomorphic comparison to evaluate private decision tree classifiers, obtaining running times orders of magnitude faster than the state of the art; (3) we improve both the communication cost and the time complexity of transciphering, by applying our homomorphic comparison to the FiLIP stream cipher. Through a prototype implementation, we demonstrate that our improved transciphering solution runs around 400 times faster than previous works. We finally present a choice in terms of PDTE design: we present a version of SortingHat without transciphering that achieves significant improvement in terms of computation cost compared to prior works, and another version t-SortingHat with transciphering that has a communication cost about 20 thousand times smaller but comparable running time.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560702](https://doi.org/10.1145/3548606.3560702)
## SSLGuard: A Watermarking Scheme for Self-supervised Learning Pre-trained Encoders.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sslguard-a-watermarking-scheme-for-self-supervised-learning-pre-trained-encoders)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sslguard-a-watermarking-scheme-for-self-supervised-learning-pre-trained-encoders)
### Authors
* Tianshuo Cong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xinlei He, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Self-supervised learning is an emerging machine learning (ML) paradigm. Compared to supervised learning which leverages high-quality labeled datasets, self-supervised learning relies on unlabeled datasets to pre-train powerful encoders which can then be treated as feature extractors for various downstream tasks. The huge amount of data and computational resources consumption makes the encoders themselves become the valuable intellectual property of the model owner. Recent research has shown that the ML model's copyright is threatened by model stealing attacks, which aim to train a surrogate model to mimic the behavior of a given model. We empirically show that pre-trained encoders are highly vulnerable to model stealing attacks. However, most of the current efforts of copyright protection algorithms such as watermarking concentrate on classifiers. Meanwhile, the intrinsic challenges of pre-trained encoder's copyright protection remain largely unstudied. We fill the gap by proposing SSLGuard, the first watermarking scheme for pre-trained encoders. Given a clean pre-trained encoder, SSLGuard injects a watermark into it and outputs a watermarked version. The shadow training technique is also applied to preserve the watermark under potential model stealing attacks. Our extensive evaluation shows that SSLGuard is effective in watermark injection and verification, and it is robust against model stealing and other watermark removal attacks such as input noising, output perturbing, overwriting, model pruning, and fine-tuning.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559355](https://doi.org/10.1145/3548606.3559355)
## The Generals' Scuttlebutt: Byzantine-Resilient Gossip Protocols.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#the-generals-scuttlebutt-byzantine-resilient-gossip-protocols)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#the-generals-scuttlebutt-byzantine-resilient-gossip-protocols)
### Authors
* Sandro Coretti, IOG, Zurich, Switzerland
* Aggelos Kiayias, University of Edinburgh & IOG, Edinburgh, Scotland Uk
* Cristopher Moore, Santa Fe Institute, Santa Fe, NM, USA
* Alexander Russell, University of Connecticut & IOG, Storrs, CT, USA
### Abstract
> One of the most successful applications of peer-to-peer communication networks is in the context of blockchain protocols, which-in Satoshi Nakamoto's own words-rely on the "nature of information being easy to spread and hard to stifle." Significant efforts were invested in the last decade into analyzing the security of these protocols, and invariably the security arguments known for longest-chain Nakamoto-style consensus use an idealization of this tenet. Unfortunately, the real-world implementations of peer-topeer gossip-style networks used by blockchain protocols rely on a number of ad-hoc attack mitigation strategies that leave a glaring gap between the idealized communication layer assumed in formal security arguments for blockchains and the real world, where a wide array of attacks have been showcased.   In this work we bridge this gap by presenting a Byzantineresilient network layer for blockchain protocols. For the first time we quantify the problem of network-layer attacks in the context of blockchain security models, and we develop a design that thwarts resource-restricted adversaries. Importantly, we focus on the proofof- stake setting due to its vulnerability to Denial-of-Service (DoS) attacks stemming from the well-known deficiency (compared to the proof-of-work setting) known as nothing at stake.   We present a Byzantine-resilient gossip protocol, and we analyze it in the Universal Composition framework. In order to prove security, we show novel results on expander properties of random graphs. Importantly, our gossip protocol can be based on any given bilateral functionality that determines a desired interaction between two "adjacent" peers in the networking layer and demonstrates how it is possible to use application-layer information to make the networking-layer resilient to attacks. Despite the seeming circularity, we demonstrate how to prove the security of a Nakamoto-style longest-chain protocol given our gossip networking functionality, and hence, we demonstrate constructively how it is possible to obtain provable security across protocol layers, given only barebone point-to-point networking, majority of honest stake, and a verifiable random function.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560638](https://doi.org/10.1145/3548606.3560638)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560638](https://dl.acm.org/doi/pdf/10.1145/3548606.3560638)
## Sharp: Short Relaxed Range Proofs.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sharp-short-relaxed-range-proofs)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sharp-short-relaxed-range-proofs)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Dahmun Goudarzi, Unaffiliated, Paris, France
* Michael Klooß, Karlsruhe Institute of Technology, KASTEL, Paris, France
* Michael Reichle, DIENS, École normale supérieure, PSL University, CNRS, INRIA, Paris, France
### Abstract
> We provide optimized range proofs, called Sharp, in discrete logarithm and hidden order groups, based on square decomposition. In the former setting, we build on the paradigm of Couteau et al. (Eurocrypt '21) and optimize their range proof (from now on, CKLR) in several ways: (1) We introduce batching via vector commitments and an adapted ∑;-protocol. (2) We introduce a new group switching strategy to reduce communication. (3) As repetitions are necessary to instantiate CKLR in standard groups, we provide a novel batch shortness test that allows for cheaper repetitions. The analysis of our test is nontrivial and forms a core technical contribution of our work. For example, for λ = 128 bit security and B = 64 bit ranges for N = 1 (resp. N = 8) proof(s), we reduce the proof size by 34% (resp. 75%) in arbitrary groups, and by 66% (resp. 88%) in groups of order 256-bit, compared to CKLR. As Sharp and CKLR proofs satisfy a "relaxed" notion of security, we show how to enhance their security with one additional hidden order group element. In RSA groups, this reduces the size of state of the art range proofs (Couteau et al., Eurocrypt '17) by 77% (λ = 128, B = 64, N = 1). Finally, we implement our most optimized range proof. Compared to the state of the art Bulletproofs (Bünz et al., S&P 2018), our benchmarks show a very significant runtime improvement. Eventually, we sketch some applications of our new range proofs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560628](https://doi.org/10.1145/3548606.3560628)
## QuerySnout: Automating the Discovery of Attribute Inference Attacks against Query-Based Systems.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#querysnout-automating-the-discovery-of-attribute-inference-attacks-against-query-based-systems)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#querysnout-automating-the-discovery-of-attribute-inference-attacks-against-query-based-systems)
### Authors
* Ana-Maria Cretu, Imperial College London, London, United Kingdom
* Florimond Houssiau, The Alan Turing Institute, London, United Kingdom
* Antoine Cully, Imperial College London, London, United Kingdom
* Yves-Alexandre de Montjoye, Imperial College London, London, United Kingdom
### Abstract
> Although query-based systems (QBS) have become one of the main solutions to share data anonymously, building QBSes that robustly protect the privacy of individuals contributing to the dataset is a hard problem. Theoretical solutions relying on differential privacy guarantees are difficult to implement correctly with reasonable accuracy, while ad-hoc solutions might contain unknown vulnerabilities. Evaluating the privacy provided by QBSes must thus be done by evaluating the accuracy of a wide range of privacy attacks. However, existing attacks against QBSes require time and expertise to develop, need to be manually tailored to the specific systems attacked, and are limited in scope. In this paper, we develop QuerySnout, the first method to automatically discover vulnerabilities in query-based systems. QuerySnout takes as input a target record and the QBS as a black box, analyzes its behavior on one or more datasets, and outputs a multiset of queries together with a rule to combine answers to them in order to reveal the sensitive attribute of the target record. QuerySnout uses evolutionary search techniques based on a novel mutation operator to find a multiset of queries susceptible to lead to an attack, and a machine learning classifier to infer the sensitive attribute from answers to the queries selected. We showcase the versatility of QuerySnout by applying it to two attack scenarios (assuming access to either the private dataset or to a different dataset from the same distribution), three real-world datasets, and a variety of protection mechanisms. We show the attacks found by QuerySnout to consistently equate or outperform, sometimes by a large margin, the best attacks from the literature. We finally show how QuerySnout can be extended to QBSes that require a budget, and apply QuerySnout to a simple QBS based on the Laplace mechanism. Taken together, our results show how powerful and accurate attacks against QBSes can already be found by an automated system, allowing for highly complex QBSes to be automatically tested "at the pressing of a button". We believe this line of research to be crucial to improve the robustness of systems providing privacy-preserving access to personal data in theory and in practice.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560581](https://doi.org/10.1145/3548606.3560581)
## VRust: Automated Vulnerability Detection for Solana Smart Contracts.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#vrust-automated-vulnerability-detection-for-solana-smart-contracts)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#vrust-automated-vulnerability-detection-for-solana-smart-contracts)
### Authors
* Siwei Cui, Texas A&M University, College Station, TX, USA
* Gang Zhao, Texas A&M University, College Station, TX, USA
* Yifei Gao, Texas A&M University, College Station, TX, USA
* Tien Tavu, Texas A&M University, College Station, TX, USA
* Jeff Huang, Texas A&M University, College Station, TX, USA
### Abstract
> Solana is a rapidly-growing high-performance blockchain powered by a Proof of History (PoH) consensus mechanism and a novel stateless programming model that decouples code from data. With parallel execution on the PoH Sealevel runtime (instead of PoW), it achieves 100X-1000X speedups compared to Ethereum in terms of transactions per second. With the new programming model, new constraints (owner, signer, keys, bump seeds) and vulnerabilities (missing checks, overflows, type confusion, etc.) must be carefully verified to ensure the security of Solana smart contracts.  This paper proposes VRust, the first automated smart contract vulnerability detection framework for Solana. A key technical novelty is a set of static analysis rules for validating untrustful input accounts that are unique in the Solana programming model. We have developed a total of eight different vulnerability types, and VRust is able to check all of them fully automatically by translating source code into Rust MIR-based inference rules without any code annotations. VRust has been evaluated on over a hundred of Solana projects, and it has revealed 12 previously unknown vulnerabilities, including 3 critical vulnerabilities in the official Solana Programming Library confirmed by core developers.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560552](https://doi.org/10.1145/3548606.3560552)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560552](https://dl.acm.org/doi/pdf/10.1145/3548606.3560552)
## Fast Fully Secure Multi-Party Computation over Any Ring with Two-Thirds Honest Majority.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fast-fully-secure-multi-party-computation-over-any-ring-with-two-thirds-honest-majority)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fast-fully-secure-multi-party-computation-over-any-ring-with-two-thirds-honest-majority)
### Authors
* Anders Dalskov, Partisia, Aarhus, Denmark
* Daniel Escudero, J.P. Morgan AI Research, New York, NY, USA
* Ariel Nof, Technion, Haifa, Israel
### Abstract
> We introduce a new MPC protocol to securely compute any functionality over an arbitrary black-box finite ring (which may not be commutative), tolerating t < n/3 active corruptions whileguaranteeing output delivery (G.O.D.). Our protocol is based on replicated secret-sharing, whose share size is known to grow exponentially with the number of parties n. However, even though the internal storage and computation in our protocol remains exponential, the communication complexity of our protocol is constant, except for a light constant-round check that is performed at the end before revealing the output. Furthermore, the amortized communication complexity of our protocol is not only constant, but very small: only 1 + t-1 over n < 1 1/3 ring elements per party, per multiplication gate over two rounds of interaction. This improves over the state-of-the art protocol in the same setting by Furukawa and Lindell (CCS 2019), which has a communication complexity of 2 2/3 field elements per party, per multiplication gate and while achieving fairness only. As an alternative, we also describe a variant of our protocol which has only one round of interaction per multiplication gate on average, and amortized communication cost of ≤ 1 1/2 ring elements per party on average for any natural circuit. Motivated by the fact that efficiency of distributed protocols are much more penalized by high communication complexity than local computation/storage, we perform a detailed analysis together with experiments in order to explore how large the number of parties can be, before the storage and computation overhead becomes prohibitive. Our results show that our techniques are viable even for a moderate number of parties (e.g., n>10).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559389](https://doi.org/10.1145/3548606.3559389)
## Understanding Security Issues in the NFT Ecosystem.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-security-issues-in-the-nft-ecosystem)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-security-issues-in-the-nft-ecosystem)
### Authors
* Dipanjan Das, University of California, Santa Barbara, Santa Barbara, CA, USA
* Priyanka Bose, University of California, Santa Barbara, Santa Barbara, CA, USA
* Nicola Ruaro, University of California, Santa Barbara, Santa Barbara, CA, USA
* Christopher Kruegel, University of California, Santa Barbara, Santa Barbara, CA, USA
* Giovanni Vigna, University of California, Santa Barbara, Santa Barbara, CA, USA
### Abstract
> Non-Fungible Tokens (NFTs) have emerged as a way to collect digital art as well as an investment vehicle. Despite having been popularized only recently, NFT markets have witnessed several high-profile (and high-value) asset sales and a tremendous growth in trading volumes over the last year. Unfortunately, these marketplaces have not yet received much security scrutiny. Instead, most academic research has focused on attacks against decentralized finance (DeFi) protocols and automated techniques to detect smart-contract vulnerabilities. To the best of our knowledge, we are the first to study the market dynamics and security issues of the multi-billion dollar NFT ecosystem. In this paper, we first present a systematic overview of how the NFT ecosystem works, and we identify three major actors: marketplaces, external entities, and users. We then perform an in-depth analysis of the top 8 marketplaces (ranked by transaction volume) to discover potential issues, many of which can lead to substantial financial losses. We also collected a large amount of asset and event data pertaining to the NFTs being traded in the examined marketplaces. We automatically analyze this data to understand how the entities external to the blockchain are able to interfere with NFT markets, leading to serious consequences, and quantify the malicious trading behaviors carried out by users under the cloak of anonymity.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559342](https://doi.org/10.1145/3548606.3559342)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559342](https://dl.acm.org/doi/pdf/10.1145/3548606.3559342)
## GearBox: Optimal-size Shard Committees by Leveraging the Safety-Liveness Dichotomy.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#gearbox-optimal-size-shard-committees-by-leveraging-the-safety-liveness-dichotomy)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#gearbox-optimal-size-shard-committees-by-leveraging-the-safety-liveness-dichotomy)
### Authors
* Bernardo David, ITU, Copenhagen, Denmark
* Bernardo Magri, The University of Manchester, Manchester, United Kingdom
* Christian Matt, Concordium, Zurich, Switzerland
* Jesper Buus Nielsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Zurich, Switzerland
### Abstract
> Sharding is an emerging technique to overcome scalability issues on blockchain based public ledgers. Without sharding, every node in the network has to listen to and process all ledger protocol messages. The basic idea of sharding is to parallelize the ledger protocol: the nodes are divided into smaller subsets that each take care of a fraction of the original load by executing lighter instances of the ledger protocol, also called shards. The smaller the shards, the higher the efficiency, as by increasing parallelism there is less overhead in the shard consensus. In this vein, we propose a novel approach that leverages the sharding safety-liveness dichotomy. We separate the liveness and safety in shard consensus, allowing us to dynamically tune shard parameters to achieve essentially optimal efficiency for the current corruption ratio of the system. We start by sampling a relatively small shard (possibly with a small honesty ratio), and we carefully trade-off safety for liveness in the consensus mechanism to tolerate small honesty without losing safety. However, for a shard to be live, a higher honesty ratio is required in the worst case. To detect liveness failures, we use a so-called control chain that is always live and safe. Shards that are detected to be not live are resampled with increased shard size and liveness tolerance until they are live, ensuring that all shards are always safe and run with optimal efficiency. As a concrete example, considering a population of 10K parties with at most 30% corruption and 60-bit security, previous designs required over 5800 parties in each shard to guarantee security. Our design requires only 1713 parties in the worst case with maximal corruption, and in the optimistic case works with only~35 parties without compromising security. Moreover, in this highly concurrent execution setting, it is paramount to guarantee that both the sharded ledger protocol and its sub protocols (i.e., the shards) are secure under composition. To prove the security of our approach, we present ideal functionalities capturing a sharded ledger as well as ideal functionalities capturing the control chain and individual shard consensus, which needs adjustable liveness. We further formalize our protocols and prove that they securely realize the sharded ledger functionality in the UC framework.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559375](https://doi.org/10.1145/3548606.3559375)
## STAR: Secret Sharing for Private Threshold Aggregation Reporting.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#star-secret-sharing-for-private-threshold-aggregation-reporting)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#star-secret-sharing-for-private-threshold-aggregation-reporting)
### Authors
* Alex Davidson, Brave Software, London, United Kingdom
* Peter Snyder, Brave Software, San Francisco, CA, USA
* E. B. Quirk, Brave Software, San Francisco, CA, USA
* Joseph Genereux, Brave Software, San Francisco, CA, USA
* Benjamin Livshits, Imperial College, London, United Kingdom
* Hamed Haddadi, Brave Software & Imperial College, London, United Kingdom
### Abstract
> Threshold aggregation reporting systems promise a practical, privacy-preserving solution for developers to learn how their applications are used in-the-wild. Unfortunately, proposed systems to date prove impractical for wide scale adoption, suffering from a combination of requiring: i) prohibitive trust assumptions; ii) high computation costs; or iii) massive user bases. As a result, adoption of truly-private approaches has been limited to only a small number of enormous (and enormously costly) projects. In this work, we improve the state of private data collection by proposing STAR, a highly efficient, easily deployable system for providing cryptographically-enforced κ-anonymity protections on user data collection. The STAR protocol is easy to implement and cheap to run, all while providing privacy properties similar to, or exceeding the current state-of-the-art. Measurements of our open-source implementation of STAR find that it is 1773x quicker, requires 62.4x less communication, and is 24x cheaper to run than the existing state-of-the-art.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560631](https://doi.org/10.1145/3548606.3560631)
## CANflict: Exploiting Peripheral Conflicts for Data-Link Layer Attacks on Automotive Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#canflict-exploiting-peripheral-conflicts-for-data-link-layer-attacks-on-automotive-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#canflict-exploiting-peripheral-conflicts-for-data-link-layer-attacks-on-automotive-networks)
### Authors
* Alvise de Faveri Tron, Politecnico di Milano & Vrije Universiteit Amsterdam, Milano, Italy
* Stefano Longari, Politecnico di Milano, Milan, Italy
* Michele Carminati, Politecnico di Milano, Milan, Italy
* Mario Polino, Politecnico di Milano, Milan, Italy
* Stefano Zanero, Politecnico di Milano, Milan, Italy
### Abstract
> Current research in the automotive domain has proven the limitations of the Controller Area Network (CAN) protocol from a security standpoint. Application-layer attacks, which involve the creation of malicious packets, are deemed feasible from remote but can be easily detected by modern Intrusion Detection Systems (IDSs). On the other hand, more recent link-layer attacks are stealthier and possibly more disruptive but require physical access to the bus. In this paper, we present CANflict, a software-only approach that allows reliable manipulation of the CAN bus at the data link layer from an unmodified microcontroller, overcoming the limitations of state-of-the-art works. We demonstrate that it is possible to deploy stealthy CAN link-layer attacks from a remotely compromised ECU, targeting another ECU on the same CAN network. To do this, we exploit the presence of pin conflicts between microcontroller peripherals to craft polyglot frames, which allows an attacker to control the CAN traffic at the bit level and bypass the protocol's rules. We experimentally demonstrate the effectiveness of our approach on high-, mid-, and low-end microcontrollers, and we provide the ground for future research by releasing an extensible tool that can be used to implement our approach on different platforms and to build CAN countermeasures at the data link layer.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560618](https://doi.org/10.1145/3548606.3560618)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560618](https://dl.acm.org/doi/pdf/10.1145/3548606.3560618)
## Two-Client Inner-Product Functional Encryption with an Application to Money-Laundering Detection.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#two-client-inner-product-functional-encryption-with-an-application-to-money-laundering-detection)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#two-client-inner-product-functional-encryption-with-an-application-to-money-laundering-detection)
### Authors
* Paola de Perthuis, Cosmian, DIENS, ENS/PSL, CNRS, Inria, Paris, France
* David Pointcheval, DIENS, ENS/PSL, CNRS, Inria, Paris, France
### Abstract
> In this paper, we extend Inner-Product Functional Encryption (IPFE), where there is just a vector in the key and a vector in the single sender's ciphertext, to two-client ciphertexts. More precisely, in our two-client functional encryption scheme, there are two Data Providers who can independently encrypt vectors x and y for a data consumer who can, from a functional decryption key associated to a vector α, compute ∑αi xiyi = x ⋅ Diag(α) ⋅ yT. Ciphertexts are linear in the dimension of the vectors, whereas the functional decryption keys are of constant size. We study two interesting particular cases: 2-party Inner-Product Functional Encryption, with α = (1,…,1). There is a unique functional decryption key, which enables the computation of x ⋅ xT by a third party, where x and y are provided by two independent clients;Inner-Product Functional Encryption with a Selector, with x = x0 II x1 and y = bn II bn ∈{1n || 0n, 0n II 1n}, for some bit b, on the public coefficients α = α0 II α1, in the functional decryption key, so that one gets xb ⋅ αbT, where x and b are provided by two independent clients. This result is based on the fundamental Product-Preserving Lemma, which is of independent interest. It exploits Dual Pairing Vector Spaces (DPVS), with security proofs under the SXDH assumption. We provide two practical applications to medical diagnosis for the latter IPFE with a selector, and to money-laundering detection for the former 2-party IPFE, both with strong privacy properties, adaptative security and the use of labels granting a Multi-Client Functional Encryption (MCFE) security for the scheme, thus enabling its use in practical situations.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559374](https://doi.org/10.1145/3548606.3559374)
## On the (In)Security of Secure ROS2.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-in-security-of-secure-ros2)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-in-security-of-secure-ros2)
### Authors
* Gelei Deng, Nanyang Technological University, Singapore, Singapore
* Guowen Xu, Nanyang Technological University, Singapore, Singapore
* Yuan Zhou, Nanyang Technological University, Singapore, Singapore
* Tianwei Zhang, Nanyang Technological University, Singapore, Singapore
* Yang Liu, Nanyang Technological University, Singapore, Singapore
### Abstract
> Robot Operating System (ROS) has been the mainstream platform for research and development of robotic applications. This platform is well-known for lacking security features and efficiency for distributed robotic computations. To address these issues, ROS2 is recently developed by utilizing the Data Distribution Service (DDS) to provide security support. Integrated with DDS, ROS2 is expected to establish the basis for trustworthy robotic ecosystems.   In this paper, we systematically study the security of the current ROS2 implementation from three perspectives. By abstracting the key functions from the ROS2 native implementation, we first formally describe the ROS2 system communication workflow and model it using a concurrent modeling language. Second, we verify the model with some key security properties through a model checker, and successfully identify four security vulnerabilities in ROS2's native security module: Secure ROS2 (SROS2). To validate these flaws, we set up simulation and physical multi-robot testbeds running different real-world workloads developed by Open Robotics and Amazon AWS Robotics. We demonstrate that an adversary can exploit these vulnerabilities to totally invalidate the security protection offered by SROS2, and obtain unauthorized permissions or steal critical information. Third, to enhance the security of ROS2, we propose a general defense solution based on the private broadcast encryption scheme. We run different workloads and benchmarks to show the efficiency and security of our defense. Our findings have been acknowledge by ROS2 official, and the suggested mitigation has been implemented in the latest SROS2 version.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560681](https://doi.org/10.1145/3548606.3560681)
## FenceSitter: Black-box, Content-Agnostic, and Synchronization-Free Enrollment-Phase Attacks on Speaker Recognition Systems.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fencesitter-black-box-content-agnostic-and-synchronization-free-enrollment-phase-attacks-on-speaker-recognition-systems)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fencesitter-black-box-content-agnostic-and-synchronization-free-enrollment-phase-attacks-on-speaker-recognition-systems)
### Authors
* Jiangyi Deng, Zhejiang University, Hangzhou, China
* Yanjiao Chen, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
### Abstract
> Speaker Recognition Systems (SRSs) grant access to legitimate users based on voiceprint. Recent research has shown that SRSs can be bypassed during the training phase (backdoor attacks) and the recognition phase (evasion attacks). In this paper, we explore a new attack surface of SRSs by presenting an enrollment-phase attack paradigm, named FenceSitter, where the adversary poisons the SRS using imperceptible adversarial ambient sound when the legitimate user registers into the SRS. The tainted voiceprint extracted by the SRS allows both the adversary and the legitimate user to access the system in all future recognition phases. To materialize such attack, we interleave carefully-designed continuous adversarial perturbations into innocent-sounding ambient sound. As computing adversarial perturbations over a long sequence of ambient sound carrier is intractable, we optimize over adversarial segments with content desensitization and physical realization. In addition, the attack is made available under the black-box settings by gradient estimation based on the natural evolution strategy. Extensive experiments have been conducted on both English and Chinese voice datasets for close-set identification (CSI), open-set identification (OSI), and speaker verification (SV) tasks. The results under various digital and physical conditions have verified the effectiveness and robustness of FenceSitter. With live enrollment experiments and user study, we further validate the practicality of FenceSitter. Our work reveals the vulnerability of SRSs during the enrollment phase, which may spur future research in improving the security of SRSs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559357](https://doi.org/10.1145/3548606.3559357)
## StrongBox: A GPU TEE on Arm Endpoints.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#strongbox-a-gpu-tee-on-arm-endpoints)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#strongbox-a-gpu-tee-on-arm-endpoints)
### Authors
* Yunjie Deng, Southern University of Science and Technology, Shenzhen, China
* Chenxu Wang, Southern University of Science and Technology & The Hong Kong Polytechnic University, Shenzhen, Hong Kong, China
* Shunchang Yu, Southern University of Science and Technology, Shenzhen, China
* Shiqing Liu, Southern University of Science and Technology, Shenzhen, China
* Zhenyu Ning, Hunan University, Southern University of Science and Technology, Changsha, Shenzhen, China
* Kevin Leach, Vanderbilt University, Nashville, TN, USA
* Jin Li, Guangzhou University, Guangzhou, China
* Shoumeng Yan, Ant Group, Hangzhou, China
* Zhengyu He, Ant Group, Hangzhou, China
* Jiannong Cao, The Hong Kong Polytechnic University, Hong Kong, China
* Fengwei Zhang, Southern University of Science and Technology, Shenzhen, China
### Abstract
> A wide range of Arm endpoints leverage integrated and discrete GPUs to accelerate computation such as image processing and numerical processing applications. However, in spite of these important use cases, Arm GPU security has yet to be scrutinized by the community. By exploiting vulnerabilities in the kernel, attackers can directly access sensitive data used during GPU computing, such as personally-identifiable image data in computer vision tasks. Existing work has used Trusted Execution Environments (TEEs) to address GPU security concerns on Intel-based platforms, while there are numerous architectural differences that lead to novel technical challenges in deploying TEEs for Arm GPUs. In addition, extant Arm-based GPU defenses are intended for secure machine learning, and lack generality. There is a need for generalizable and efficient Arm-based GPU security mechanisms. To address these problems, we present StrongBox, the first GPU TEE for secured general computation on Arm endpoints. During confidential computation on Arm GPUs, StrongBox provides an isolated execution environment by ensuring exclusive access to the GPU. Our approach is based in part on a dynamic, fine-grained memory protection policy as Arm-based GPUs typically share a unified memory with the CPU, a stark contrast with Intel-based platforms. Furthermore, by characterizing GPU buffers as secure and non-secure, StrongBox reduces redundant security introspection operations to control access to sensitive data used by the GPU, ultimately reducing runtime overhead. Our design leverages the widely-deployed Arm TrustZone and generic Arm features, without hardware modification or architectural changes. We prototype StrongBox using an off-the-shelf Arm Mali GPU and perform an extensive evaluation. Our results show that StrongBox successfully ensures the GPU computing security with a low (4.70% - 15.26%) overhead across several indicative benchmarks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560627](https://doi.org/10.1145/3548606.3560627)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560627](https://dl.acm.org/doi/pdf/10.1145/3548606.3560627)
## Understanding Real-world Threats to Deep Learning Models in Android Apps.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-real-world-threats-to-deep-learning-models-in-android-apps)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-real-world-threats-to-deep-learning-models-in-android-apps)
### Authors
* Zizhuang Deng, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Kai Chen, SKLOIS, IIE, CAS & School of Cyber Security, UCAS & BAAI, Beijing, China
* Guozhu Meng, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Xiaodong Zhang, SKLOIS, IIE, CAS & School of Cyber Security, UCAS, Beijing, China
* Ke Xu, Huawei International Pte Ltd, Singapore, Singapore
* Yao Cheng, Huawei International Pte Ltd, Singapore, Singapore
### Abstract
> Famous for its superior performance, deep learning (DL) has been popularly used within many applications, which also at the same time attracts various threats to the models. One primary threat is from adversarial attacks. Researchers have intensively studied this threat for several years and proposed dozens of approaches to create adversarial examples (AEs). But most of the approaches are only evaluated on limited models and datasets (e.g., MNIST, CIFAR-10). Thus, the effectiveness of attacking real-world DL models is not quite clear. In this paper, we perform the first systematic study of adversarial attacks on real-world DNN models and provide a real-world model dataset named RWM. Particularly, we design a suite of approaches to adapt current AE generation algorithms to the diverse real-world DL models, including automatically extracting DL models from Android apps, capturing the inputs and outputs of the DL models in apps, generating AEs and validating them by observing the apps' execution. For black-box DL models, we design a semantic-based approach to build suitable datasets and use them for training substitute models when performing transfer-based attacks. After analyzing 245 DL models collected from 62,583 real-world apps, we have a unique opportunity to understand the gap between real-world DL models and contemporary AE generation algorithms. To our surprise, the current AE generation algorithms can only directly attack 6.53% of the models. Benefiting from our approach, the success rate upgrades to 47.35%.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559388](https://doi.org/10.1145/3548606.3559388)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559388](https://dl.acm.org/doi/pdf/10.1145/3548606.3559388)
## A Run a Day Won't Keep the Hacker Away: Inference Attacks on Endpoint Privacy Zones in Fitness Tracking Social Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-run-a-day-wont-keep-the-hacker-away-inference-attacks-on-endpoint-privacy-zones-in-fitness-tracking-social-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-run-a-day-wont-keep-the-hacker-away-inference-attacks-on-endpoint-privacy-zones-in-fitness-tracking-social-networks)
### Authors
* Karel Dhondt, imec-DistriNet, KU Leuven, Ghent, Belgium
* Victor Le Pochat, imec-DistriNet, KU Leuven, Leuven, Belgium
* Alexios Voulimeneas, imec-DistriNet, KU Leuven, Ghent, Belgium
* Wouter Joosen, imec-DistriNet, KU Leuven, Leuven, Belgium
* Stijn Volckaert, imec-DistriNet, KU Leuven, Ghent, Belgium
### Abstract
> Fitness tracking social networks such as Strava allow users to record sports activities and share them publicly. Sharing encourages peer interaction but also constitutes a risk, because an activity's start or finish may inadvertently reveal privacy-sensitive locations such as a home or workplace. To mitigate this risk, networks introduced endpoint privacy zones (EPZs), which hide track portions around protected locations. In this paper, we show that EPZ implementations of major services remain vulnerable to inference attacks that significantly reduce the effective anonymity provided by the EPZ, and even reveal the protected location. Our attack leverages distance information leaked in activity metadata, street grid data, and the locations of the entry points into the EPZ. This yields a constrained search space where we use regression analysis to predict protected locations. Our evaluation on 1.4 million Strava activities shows that our attack discovers the protected location for up to 85% of EPZs. Larger EPZs reduce the performance of our attack, while geographically dispersed activities in sparser street grids yield better performance. We propose six countermeasures, that, however, come with a usability trade-off, and responsibly disclosed our findings and countermeasures to the major networks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560616](https://doi.org/10.1145/3548606.3560616)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560616](https://dl.acm.org/doi/pdf/10.1145/3548606.3560616)
## Second-Order Low-Randomness d + 1 Hardware Sharing of the AES.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#second-order-low-randomness-d-1-hardware-sharing-of-the-aes)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#second-order-low-randomness-d-1-hardware-sharing-of-the-aes)
### Authors
* Siemen Dhooghe, COSIC-imec & KU Leuven, Leuven, Belgium
* Aein Rezaei Shahmirzadi, Ruhr University Bochum & Horst Görtz Institute for IT Security, Bochum, Germany
* Amir Moradi, Ruhr University Bochum & Horst Gortz Institute for IT Security, Bochum, Germany
### Abstract
> In this paper, we introduce a second-order masking of the AES using the minimal number of shares and a total of 1268 bits of randomness including the sharing of the plaintext and key. The masking of the S-box is based on the tower field decomposition of the inversion over bytes where the changing of the guards technique is used in order to re-mask the middle branch of the decomposition. The sharing of the S-box is carefully crafted such that it achieves first-order probing security without the use of randomness and such that the sharing of its output is uniform. Multi-round security is achieved by re-masking the state where we use a theoretical analysis based on the propagation of probed information to reduce the demand for fresh randomness per round. The result is a second-order masked AES which competes with the state-of-the-art in terms of latency and area, but reduces the randomness complexity over eight times over the previous known works. In addition to the corresponding theoretical analysis and proofs for the security of our masked design, it has been implemented on FPGA and evaluated via lab analysis.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560634](https://doi.org/10.1145/3548606.3560634)
## Improving Line-Point Zero Knowledge: Two Multiplications for the Price of One.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#improving-line-point-zero-knowledge-two-multiplications-for-the-price-of-one)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#improving-line-point-zero-knowledge-two-multiplications-for-the-price-of-one)
### Authors
* Samuel Dittmer, Stealth Software Technologies, Inc., Los Angeles, CA, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, CA, USA
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, CA, USA
### Abstract
> Recent advances in fast protocols for vector oblivious linear evaluation (VOLE) have inspired a family of new VOLE-based lightweight designated-verifier NIZK protocols (Weng et al., S&P 2021, Baum et al., Crypto 2021, Dittmer et al., ITC 2021, Yang et al., CCS 2021). In particular, the Line-Point Zero Knowledge (LPZK) protocol of Dittmer et al. has the advantage of being entirely non-cryptographic given a single instance of a random VOLE correlation. We present improvements to LPZK through the introduction of additional structure to the correlated randomness. Using an efficiently realizable variant of the VOLE correlation, we reduce the online proof size of LPZK by roughly 2x: from roughly 2 field elements per multiplication gate, or 1 element in the random oracle variant, to only 1 or 1/2 elements respectively. In particular, we get the first practical VOLE-based NIZK that breaks the 1-element-per-multiplication barrier. We implemented an optimized version of our protocol and compared it with other recent VOLE-based NIZK protocols. In the typical case where communication is the bottleneck, we get at least 2x performance improvement over all previous VOLE-based protocols. When prover computation is the bottleneck, we outperform all non-LPZK protocols by at least 2-3x and (our optimized implementation of) LPZK by roughly 30%, obtaining a 2-3x slowdown factor compared to plain circuit evaluation.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559385](https://doi.org/10.1145/3548606.3559385)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559385](https://dl.acm.org/doi/pdf/10.1145/3548606.3559385)
## Shorter Signatures Based on Tailor-Made Minimalist Symmetric-Key Crypto.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#shorter-signatures-based-on-tailor-made-minimalist-symmetric-key-crypto)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#shorter-signatures-based-on-tailor-made-minimalist-symmetric-key-crypto)
### Authors
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Daniel Kales, Graz University of Technology, Graz, Austria
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Markus Schofnegger, Graz University of Technology, Graz, Austria
* Greg Zaverucha, Microsoft Research, Redmond, WA, USA
### Abstract
> Signature schemes based on the MPC-in-the-head approach (MPCitH) have either been designed by taking a proof system and selecting a suitable symmetric-key primitive (Picnic, CCS16), or starting with an existing primitive such as AES and trying to find the most suitable proof system (BBQ, SAC19 or Banquet, PKC21). In this work we do both: we improve certain symmetric-key primitives to better fit existing signature schemes, and we also propose a new signature scheme that combines a new, minimalist one-way function with changes to a proof system to make their combination even more efficient. Our concrete results are as follows. First, we show how to provably remove the need to include the key schedule of block ciphers. This simplifies schemes like Picnic and it also leads to the fastest and smallest AES-based signatures, where we achieve signature sizes of around 10.8 to 14.2 KB using AES-128, on average 10% shorter than Banquet and 15% faster. Second, we investigate a variant of AES with larger S-boxes we call LSAES, for which we argue that it is likely to be at least as strong as AES, further reducing the size of AES-based signatures to 9.9 KB. Finally, we present a new signature scheme, Rainier, combining a new one-way function called Rain with a Banquet-like proof system. To the best of our knowledge, it is the first MPCitH-based signature scheme which can produce signatures that are less than 5 KB in size; it also outperforms previous Picnic and Banquet instances in all performance metrics.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559353](https://doi.org/10.1145/3548606.3559353)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559353](https://dl.acm.org/doi/pdf/10.1145/3548606.3559353)
## Leakage and Tamper Resilient Permutation-Based Cryptography.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#leakage-and-tamper-resilient-permutation-based-cryptography)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#leakage-and-tamper-resilient-permutation-based-cryptography)
### Authors
* Christoph Dobraunig, Graz University of Technology and Lamarr Security Research, Graz, Austria
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, Netherlands
* Robert Primas, Graz University of Technology, Graz, Austria
### Abstract
> Implementation attacks such as power analysis and fault attacks have shown that, if potential attackers have physical access to a cryptographic device, achieving practical security requires more considerations apart from just cryptanalytic security. In recent years, and with the advent of micro-architectural or hardware-oriented attacks, it became more and more clear that similar attack vectors can also be exploited on larger computing platforms and without the requirement of physical proximity of an attacker. While newly discovered attacks typically come with implementation recommendations that help counteract a specific attack vector, the process of constantly patching cryptographic code is quite time consuming in some cases, and simply not possible in other cases.   What adds up to the problem is that the popular approach of leakage resilient cryptography only provably solves part of the problem: it discards the threat of faults. Therefore, we put forward the usage of leakage and tamper resilient cryptographic algorithms, as they can offer built-in protection against various types of physical and hardware oriented attacks, likely including attack vectors that will only be discovered in the future. In detail, we present the - to the best of our knowledge - first framework for proving the security of permutation-based symmetric cryptographic constructions in the leakage and tamper resilient setting. As a proof of concept, we apply the framework to a sponge-based stream encryption scheme called asakey and provide a practical analysis of its resistance against side channel and fault attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560635](https://doi.org/10.1145/3548606.3560635)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560635](https://dl.acm.org/doi/pdf/10.1145/3548606.3560635)
## Exposing the Rat in the Tunnel: Using Traffic Analysis for Tor-based Malware Detection.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#exposing-the-rat-in-the-tunnel-using-traffic-analysis-for-tor-based-malware-detection)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#exposing-the-rat-in-the-tunnel-using-traffic-analysis-for-tor-based-malware-detection)
### Authors
* Priyanka Dodia, Qatar Computing Research Institute, Doha, Qatar
* Mashael AlSabah, Qatar Computing Research Institute, Doha, Qatar
* Omar Alrawi, Georgia Institute of Technology, Atlanta, GA, USA
* Tao Wang, Simon Fraser University, Vancouver, BC, Canada
### Abstract
> Tor~\citetor is the most widely used anonymous communication network with millions of daily users~\citetormetrics. Since Tor provides server and client anonymity, hundreds of malware binaries found in the wild rely on it to hide their presence and hinder Command & Control (C&C) takedown operations. We believe Tor is a paramount tool enabling online freedom and privacy, and blocking it to defend against such malware is infeasible for both users and organizations. In this work, we present effective traffic analysis approaches that can accurately identify Tor-based malware communication. We collect hundreds of Tor-based malware binaries, execute and examine more than 47,000 active encrypted malware connections and compare them with benign browsing traffic. In addition to traditional traffic analysis features (which work at the connection level), we propose global host-level network features to capture peculiar malware communication fingerprints across host logs. Our experiments confirm that our models are able to detect "zero-day'' malware connections with 0.7% FPR even when malware connections constitute less than 5% of Tor traces in the test set. Using multi-labeling approaches, we are able to accurately detect the malware behavior-based classes (grayware, ransomware, etc). Finally, we evaluate the robustness of our models on real-world enterprise logs and show that the classifiers can identify infected hosts even with missing features.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560604](https://doi.org/10.1145/3548606.3560604)
## Watch Out for Race Condition Attacks When Using Android External Storage.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#watch-out-for-race-condition-attacks-when-using-android-external-storage)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#watch-out-for-race-condition-attacks-when-using-android-external-storage)
### Authors
* Shaoyong Du, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, China
* Xin Liu, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, China
* Guoqing Lai, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, China
* Xiangyang Luo, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, China
### Abstract
> Currently, in Android, applications (apps for short) rely heavily on external storage to provide their services. Race conditions are introduced by the inappropriate file operations. Through race conditions, the malicious app can manipulate the file content and induce the victim app to perform unexpected actions, which we callrace condition attack. Race condition attack can cause a series of security problems and prior work has already implemented some of them. From Android 10, Google has introduced scoped storage to defend against attacks based on external storage. However, considering current market shares of different Android versions, it is still a long way to have scoped storage deployed on each device. To protect current users from this kind of attack, it is essential to raise app developers' security awareness. Therefore, we conduct a comprehensive survey on race condition attack to learn about its current status over Android apps. We propose an analysis engine, named RECAST, which gathers file operation events on external storage and infers the associated file operation processes. With RECAST, we collect 5,359,339 file operation events over 105,963 files. From the analysis result, we find that, with the limited kinds of events, a tremendous number of unique file operating patterns (1,977) are constituted. Over these file operating patterns, the time window is much common and available to launch a series of attacks (94.26% of the tested files are vulnerable to this problem). Consequently, race condition attack has become a non-negligible issue for app developers when using Android external storage.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560666](https://doi.org/10.1145/3548606.3560666)
## Perception-Aware Attack: Creating Adversarial Music via Reverse-Engineering Human Perception.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#perception-aware-attack-creating-adversarial-music-via-reverse-engineering-human-perception)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#perception-aware-attack-creating-adversarial-music-via-reverse-engineering-human-perception)
### Authors
* Rui Duan, University of South Florida, Tampa, FL, USA
* Zhe Qu, University of South Florida, Tampa, FL, USA
* Shangqing Zhao, University of Oklahoma, Tulsa, OK, USA
* Leah Ding, American University, Washington, D.C., DC, USA
* Yao Liu, University of South Florida, Tampa, FL, USA
* Zhuo Lu, University of South Florida, Tampa, FL, USA
### Abstract
> Previous adversarial audio attacks have mainly focused on ensuring the effectiveness of attacking an audio signal classifier via creating a small noise-like perturbation on the original signal. It is still unclear if an attacker is able to create audio signal perturbations that can be well perceived by human beings in addition to its attack effectiveness. In this work, we formulate the adversarial attack against music signals as a new perception-aware attack framework, which integrates human study into adversarial attack design. Specifically, we invite human participants to rate their perceived deviation based on pairs of original and perturbed music signals, and reverse-engineer the human perception process by regression analysis to predict the human-perceived deviation given a perturbed signal. The perception-aware attack is then formulated as an optimization problem that finds an optimal perturbation signal to minimize the prediction of perceived deviation from the regressed human perception model. Experiments show that the attack produces adversarial music with significantly better perceptual quality than prior work against YouTube's copyright detector.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559350](https://doi.org/10.1145/3548606.3559350)
## Towards Automated Safety Vetting of Smart Contracts in Decentralized Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#towards-automated-safety-vetting-of-smart-contracts-in-decentralized-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#towards-automated-safety-vetting-of-smart-contracts-in-decentralized-applications)
### Authors
* Yue Duan, Illinois Institute of Technology & University of Ut, Chicago, IL, USA
* Xin Zhao, Nanjing University, Nanjing, China
* Yu Pan, University of Utah, Salt Lake City, UT, USA
* Shucheng Li, Nanjing University, Nanjing, China
* Minghao Li, Harvard University, Boston, MA, USA
* Fengyuan Xu, National Key Lab for Novel Software Technology, Nanjing University, Nanjing, China
* Mu Zhang, University of Utah, Salt Lake City, UT, USA
### Abstract
> We propose VetSC, a novel UI-driven, program analysis guided model checking technique that can automatically extract contract semantics in DApps so as to enable targeted safety vetting. To facilitate model checking, we extract business model graphs from contract code that capture its intrinsic business and safety logic. To automatically determine what safety specifications to check, we retrieve textual semantics from DApp user interfaces. To exclude untrusted UI text, we also validate the UI-logic consistency and detect any discrepancies. We have implemented VetSC and applied it to 34 real-world DApps. Experiments have demonstrated that VetSC can accurately interpret smart contract code, enable autonomous safety vetting, and discover safety risks in real-world Dapps. Using our tool, we have successfully discovered 19 new safety risks in the wild, such as expired lottery tickets and double voting.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559384](https://doi.org/10.1145/3548606.3559384)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559384](https://dl.acm.org/doi/pdf/10.1145/3548606.3559384)
## Poirot: Probabilistically Recommending Protections for the Android Framework.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poirot-probabilistically-recommending-protections-for-the-android-framework)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poirot-probabilistically-recommending-protections-for-the-android-framework)
### Authors
* Zeinab El-Rewini, University of Waterloo, Waterloo, ON, Canada
* Zhuo Zhang, Purdue University, West Lafayette, IN, USA
* Yousra Aafer, University of Waterloo, Waterloo, ON, Canada
### Abstract
> Inconsistent security policy enforcement within the Android framework can allow malicious actors to improperly access sensitive resources. A number of prominent inconsistency detection approaches have been proposed in and across various layers of the Android operating system. However, the existing approaches suffer from high false positive rates as they rely solely on simplistic convergence analysis and reachability based relations to reason about the validity of access control enforcement. We observe that resource-to-access control associations are highly uncertain in the context of Android. Thus, we introduce Poirot, a next-generation inconsistency detection tool that leverages probabilistic inference to generate a comprehensive set of protection recommendations for Android framework APIs. We evaluate Poirot on four Android images and detect 26 total inconsistencies.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560710](https://doi.org/10.1145/3548606.3560710)
## TurboPack: Honest Majority MPC with Constant Online Communication.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#turbopack-honest-majority-mpc-with-constant-online-communication)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#turbopack-honest-majority-mpc-with-constant-online-communication)
### Authors
* Daniel Escudero, J.P. Morgan AI Research, New York, NY, USA
* Vipul Goyal, NTT Research & Carnegie Mellon University, Sunnyvale, CA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, NY, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, PA, USA
### Abstract
> We present a novel approach to honest majority secure multiparty computation in the preprocessing model with information theoretic security that achieves the best online communication complexity. The online phase of our protocol requires 12 elements in total per multiplication gate with circuit-dependent preprocessing, or 20 elements in total with circuit-independent preprocessing. Prior works achieved linear online communication complexity in n, the number of parties, with the best prior existing solution involving 1.5n elements per multiplication gate. Only one recent work packing [28] achieves constant online communication complexity, but the constants are large (108 elements for passive security, and twice that for active security). That said, our protocol offers a very efficient information theoretic online phase for any number of parties. The total end-to-end communication cost with the preprocessing phase is linear in n, i.e., 10n + 44, which is larger than the 4n complexity of the state-of-the-art protocols. The gap is not significant when the online phase must be optimized as a priority and a reasonably large number of parties is involved. Unlike previous works based on packed secret-sharing to reduce communication complexity, we further reduce the communication by avoiding the use of complex and expensive network routing or permutations tools. Furthermore, we also allow for a maximal honest majority adversary, while most previous works require the set of honest parties to be strictly larger than a majority. Our protocol is simple and offers concrete efficiency. To illustrate this we present a full-fledged implementation together with experimental results that show improvements in online phase runtimes that go up to 5x in certain settings (e.g. 45 parties, LAN network, circuit of depth 10 with 1M gates).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560633](https://doi.org/10.1145/3548606.3560633)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560633](https://dl.acm.org/doi/pdf/10.1145/3548606.3560633)
## Automatic Detection of Speculative Execution Combinations.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#automatic-detection-of-speculative-execution-combinations)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#automatic-detection-of-speculative-execution-combinations)
### Authors
* Xaver Fabian, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Marco Guarnieri, IMDEA Software Institute, Madrid, Spain
* Marco Patrignani, University of Trento, Trento, Italy
### Abstract
> Modern processors employ different speculation mechanisms to speculate over different kinds of instructions. Attackers can exploit these mechanisms simultaneously in order to trigger leaks of speculatively-accessed data. Thus, sound reasoning about such speculative leaks requires accounting for all potential speculation mechanisms. Unfortunately, existing formal models only support reasoning about fixed, hard-coded speculation mechanisms, with no simple support to extend said reasoning to new mechanisms. In this paper, we develop a framework for reasoning about composed speculative semantics that capture speculation due to different mechanisms and implement it as part of the Spectector verification tool. We implement novel semantics for speculating over store and return instructions and combine them with the semantics for speculating over branch instructions. Our framework yields speculative semantics for speculating over any combination of these instructions that are secure by construction, i.e., we obtain these security guarantees for free. The implementation of our novel semantics in Spectector let us verify programs that are vulnerable to Spectre v1, Spectre v4, and Spectre v5 vulnerabilities as well as new snippets that are only vulnerable to their compositions.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560555](https://doi.org/10.1145/3548606.3560555)
## When Frodo Flips: End-to-End Key Recovery on FrodoKEM via Rowhammer.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#when-frodo-flips-end-to-end-key-recovery-on-frodokem-via-rowhammer)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#when-frodo-flips-end-to-end-key-recovery-on-frodokem-via-rowhammer)
### Authors
* Michael Fahr, University of Arkansas, Fayetteville, AR, USA
* Hunter Kippen, University of Maryland, College Park, MD, USA
* Andrew Kwong, University of Michigan, Ann Arbor, MI, USA
* Thinh Dang, George Washington University & NIST, Washington, DC, USA
* Jacob Lichtinger, NIST, Gaithersburg, MD, USA
* Dana Dachman-Soled, University of Maryland, College Park, MD, USA
* Daniel Genkin, Georgia Institute of Technology, Atlanta, GA, USA
* Alexander Nelson, University of Arkansas, Fayetteville, AR, USA
* Ray Perlner, NIST, Gaithersburg, MD, USA
* Arkady Yerukhimovich, George Washington University, Washington, DC, USA
* Daniel Apon, MITRE, McLean, VA, USA
### Abstract
> In this work, we recover the private key material of the FrodoKEM key exchange mechanism as submitted to the NIST Post Quantum Cryptography (PQC) standardization process.   The new mechanism that allows for this is a Rowhammer-assisted poisoning of the FrodoKEM Key Generation (KeyGen) process. The Rowhammer side-channel is a hardware-based security exploit that allows flipping bits in DRAM by "hammering" rows of memory adjacent to some target-victim memory location by repeated memory accesses. Using Rowhammer, we induce the FrodoKEM software to output a higher-error Public Key (PK), (\matA, \matB = \matA \matS +\vec\widetildeE ), where the error \widetilde\vecE is modified by Rowhammer.  Then, we perform a decryption failure attack, using a variety of publicly-accessible supercomputing resources running on the order of only 200,000 core-hours. We delicately attenuate the decryption failure rate to ensure that the adversary's attack succeeds practically, but so honest users cannot easily detect the manipulation.   Achieving this public key "poisoning'' requires an extreme engineering effort, as FrodoKEM's KeyGen runs on the order of 8 milli seconds. (Prior Rowhammer-assisted attacks against cryptography require as long as 8 hours of persistent access.) In order to handle this real-world timing condition, we require a wide variety of prior and brand new, low-level engineering techniques, including e.g. memory massaging algorithms -- i.e. "Feng Shui'' -- and a precisely-targeted performance degradation attack on the extendable output function SHAKE. We explore the applicability of our techniques to other lattice-based KEMs in the NIST PQC Round 3 candidate-pool, e.g. Kyber, Saber, etc, as well as the difficulties that arise in the various settings. To conclude, we discuss various simple countermeasures to protect implementations against this, and similar, attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560673](https://doi.org/10.1145/3548606.3560673)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560673](https://dl.acm.org/doi/pdf/10.1145/3548606.3560673)
## NFGen: Automatic Non-linear Function Evaluation Code Generator for General-purpose MPC Platforms.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#nfgen-automatic-non-linear-function-evaluation-code-generator-for-general-purpose-mpc-platforms)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#nfgen-automatic-non-linear-function-evaluation-code-generator-for-general-purpose-mpc-platforms)
### Authors
* Xiaoyu Fan, Tsinghua University, Beijing, China
* Kun Chen, Tsingjiao Information Technology Co. Ltd., Beijing, China
* Guosai Wang, Tsingjiao Information Technology Co. Ltd., Beijing, China
* Mingchun Zhuang, Beijing University of Posts and Telecommunications, Beijing, China
* Yi Li, Tsingjiao Information Technology Co. Ltd., Beijing, China
* Wei Xu, Tsinghua University, Beijing, China
### Abstract
> Due to the absence of a library for non-linear function evaluation, so-called general-purpose secure multi-party computation (MPC) are not as "general'' as MPC programmers expect. Prior arts either naively reuse plaintext methods, resulting in suboptimal performance and even incorrect results, or handcraft ad hoc approximations for specific functions or platforms. We propose a general technique, NFGen1, that utilizes pre-computed discrete piecewise polynomials to accurately approximate generic functions using fixed-point numbers. We implement it using a performance-prediction-based code generator to support different platforms. Conducting extensive evaluations of 23 non-linear functions against six MPC protocols on two platforms, we demonstrate significant performance, accuracy, and generality improvements over existing methods.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560565](https://doi.org/10.1145/3548606.3560565)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560565](https://dl.acm.org/doi/pdf/10.1145/3548606.3560565)
## Shifted Inverse: A General Mechanism for Monotonic Functions under User Differential Privacy.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#shifted-inverse-a-general-mechanism-for-monotonic-functions-under-user-differential-privacy)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#shifted-inverse-a-general-mechanism-for-monotonic-functions-under-user-differential-privacy)
### Authors
* Juanru Fang, Hong Kong University of Science and Technology, Hong Kong, Hong Kong
* Wei Dong, Hong Kong University of Science and Technology, Hong Kong, Hong Kong
* Ke Yi, Hong Kong University of Science and Technology, Hong Kong, Hong Kong
### Abstract
> While most work on differential privacy has focused on protecting the privacy of tuples, it has been realized that such a simple model cannot capture the complex user-tuple relationships in many real-world applications. Thus, user differential privacy (user-DP) has recently gained more attention, which includes node-DP for graph data as a special case. Most existing work on user-DP has only studied the sum estimation problem. In this work, we design a general DP mechanism for any monotonic function under user-DP with strong optimality guarantees. While our general mechanism may run in super-polynomial time, we show how to instantiate an approximate version in polynomial time on some common monotonic functions, including sum, k-selection, maximum frequency, and distinct count. Finally, we conduct experiments on all these functions and the results show that our framework is more general and obtains better results in many cases.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560567](https://doi.org/10.1145/3548606.3560567)
## CINI MINIS: Domain Isolation for Fault and Combined Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cini-minis-domain-isolation-for-fault-and-combined-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cini-minis-domain-isolation-for-fault-and-combined-security)
### Authors
* Jakob Feldtkeller, Ruhr University Bochum, Bochum, Germany
* Jan Richter-Brockmann, Ruhr University Bochum, Bochum, Germany
* Pascal Sasdrich, Ruhr University Bochum, Bochum, Germany
* Tim Güneysu, Ruhr University Bochum, Bochum, Germany
### Abstract
> Observation and manipulation of physical characteristics are well-known and powerful threats to cryptographic devices. While countermeasures against passive side-channel and active fault-injection attacks are well understood individually, combined attacks, i.e., the combination of fault injection and side-channel analysis, is a mostly unexplored area. Naturally, the complexity of analysis and secure construction increases with the sophistication of the adversary, making the combined scenario especially challenging. To tackle complexity, the side-channel community has converged on the construction of small building blocks, which maintain security properties even when composed. In this regard, Probe-Isolating Non-Interference (PINI) is a widely used notion for secure composition in the presence of side-channel attacks due to its efficiency and elegance. In this work, we transfer the core ideas behind PINI to the context of fault and combined security and, from that, construct the first trivially composable gadgets in the presence of a combined adversary.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560614](https://doi.org/10.1145/3548606.3560614)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560614](https://dl.acm.org/doi/pdf/10.1145/3548606.3560614)
## Adversarial Correctness and Privacy for Probabilistic Data Structures.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#adversarial-correctness-and-privacy-for-probabilistic-data-structures)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#adversarial-correctness-and-privacy-for-probabilistic-data-structures)
### Authors
* Mia Filic, ETH Zürich, Zürich, Switzerland
* Kenneth G. Paterson, ETH Zürich, Zürich, Switzerland
* Anupama Unnikrishnan, ETH Zürich, Zürich, Switzerland
* Fernando Virdia, Intel Labs, Zürich, Switzerland
### Abstract
> We study the security of Probabilistic Data Structures (PDS) for handling Approximate Membership Queries (AMQ); prominent examples of AMQ-PDS are Bloom and Cuckoo filters. AMQ-PDS are increasingly being deployed in environments where adversaries can gain benefit from carefully selecting inputs, for example to increase the false positive rate of an AMQ-PDS. They are also being used in settings where the inputs are sensitive and should remain private in the face of adversaries who can access an AMQ-PDS through an API or who can learn its internal state by compromising the system running the AMQ-PDS. We develop simulation-based security definitions that speak to correctness and privacy of AMQ-PDS. Our definitions are general and apply to a broad range of adversarial settings. We use our definitions to analyse the behaviour of both Bloom filters and insertion-only Cuckoo filters. We show that these AMQ-PDS can be provably protected through replacement or composition of hash functions with keyed pseudorandom functions in their construction. We also examine the practical impact on storage size and computation of providing secure instances of Bloom and insertion-only Cuckoo filters.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560621](https://doi.org/10.1145/3548606.3560621)
## LibAFL: A Framework to Build Modular and Reusable Fuzzers.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#libafl-a-framework-to-build-modular-and-reusable-fuzzers)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#libafl-a-framework-to-build-modular-and-reusable-fuzzers)
### Authors
* Andrea Fioraldi, EURECOM, Biot, France
* Dominik Christian Maier, Google Inc., Mountain View, CA, USA
* Dongjia Zhang, The University of Tokyo, Tokyo, Japan
* Davide Balzarotti, EURECOM, Biot, France
### Abstract
> The release of AFL marked an important milestone in the area of software security testing, revitalizing fuzzing as a major research topic and spurring a large number of research studies that attempted to improve and evaluate the different aspects of the fuzzing pipeline. Many of these studies implemented their techniques by forking the AFL codebase. While this choice might seem appropriate at first, combining multiple forks into a single fuzzer requires a high engineering overhead, which hinders progress in the area and prevents fair and objective evaluations of different techniques. The highly fragmented landscape of the fuzzing ecosystem also prevents researchers from combining orthogonal techniques and makes it difficult for end users to adopt new prototype solutions. To tackle this problem, in this paper we propose LibAFL, a framework to build modular and reusable fuzzers. We discuss the different components generally used in fuzzing and map them to an extensible framework. LibAFL allows researchers and engineers to extend the core fuzzer pipeline and share their new components for further evaluations. As part of LibAFL, we integrated techniques from more than 20 previous works and conduct extensive experiments to show the benefit of our framework to combine and evaluate different approaches. We hope this can help to shed light on current advancements in fuzzing and provide a solid base for comparative and extensible research in the future.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560602](https://doi.org/10.1145/3548606.3560602)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560602](https://dl.acm.org/doi/pdf/10.1145/3548606.3560602)
## Efficient Zero-Knowledge Proofs on Signed Data with Applications to Verifiable Computation on Data Streams.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#efficient-zero-knowledge-proofs-on-signed-data-with-applications-to-verifiable-computation-on-data-streams)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#efficient-zero-knowledge-proofs-on-signed-data-with-applications-to-verifiable-computation-on-data-streams)
### Authors
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Ida Tucker, IMDEA Software Institute, Madrid, Spain
### Abstract
> We study the problem of privacy-preserving proofs on streamed authenticated data. In this setting, a server receives a continuous stream of data from a trusted data provider, and is requested to prove computations over the data to third parties in a correct and private way. In particular, the third party learns no information on the data beyond the validity of claimed results. A challenging requirement here, is that the third party verifies the validity with respect to the specific data authenticated by the provider, while communicating only with the server. This problem is motivated by various application areas, ranging from stock-market monitoring and prediction services; to the publication of government-ran statistics on large healthcare databases. All of these applications require a reliable and scalable solution, in order to see practical adoption. In this paper, we identify and formalize a key primitive allowing one to achieve the above: homomorphic signatures which evaluate non-deterministic computations (HSNP). We provide a generic construction for an HSNP evaluating universal relations; instantiate the construction; and implement a library for HSNP. This in turn allows us to build SPHINX: a system for proving arbitrary computations over streamed authenticated data in a privacy-preserving manner. SPHINX improves significantly over alternative solutions for this model. For instance, compared to corresponding solutions based on Marlin (Eurocrypt'20), the proof generation of SPHINX is between 15× and 1300× faster for various computations used in sliding-window statistics.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560630](https://doi.org/10.1145/3548606.3560630)
## Minotaur: Multi-Resource Blockchain Consensus.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#minotaur-multi-resource-blockchain-consensus)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#minotaur-multi-resource-blockchain-consensus)
### Authors
* Matthias Fitzi, IOG, Zurich, Switzerland
* Xuechao Wang, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Sreeram Kannan, University of Washington, Seattle, Seattle, WA, USA
* Aggelos Kiayias, University of Edinburgh & IOG, Edinburgh, United Kingdom
* Nikos Leonardos, University of Athens, Athens, Greece
* Pramod Viswanath, Princeton University, Princeton, NJ, USA
* Gerui Wang, Beijing Academy of Blockchain and Edge Computing, Beijing, China
### Abstract
> Resource-based consensus is the backbone of permissionless distributed ledger systems. The security of such protocols relies fundamentally on the level of resources actively engaged in the system. The variety of different resources (and related proof protocols, some times referred to as PoX in the literature) raises the fundamental question whether it is possible to utilize many of them in tandem and build multi-resource consensus protocols. The challenge in combining different resources is to achieve fungibility between them, in the sense that security would hold as long as the cumulative adversarial power across all resources is bounded. In this work, we put forth Minotaur, a multi-resource blockchain consensus protocol that combines proof of work (PoW) and proof-of-stake (PoS), and we prove it optimallyfungible. At the core of our design, Minotaur operates in epochs while continuously sampling the active computational power to provide a fair exchange between the two resources, work and stake. Further, we demonstrate the ability of Minotaur to handle a higher degree of work fluctuation as compared to the Bitcoin blockchain; we also generalize Minotaur to any number of resources. We demonstrate the simplicity of Minotaur via implementing a full stack client in Rust (available open source[24]). We use the client to test the robustness of Minotaur to variable mining power and combined work/stake attacks and demonstrate concrete empirical evidence towards the suitability of Minotaur to serve as the consensus layer of a real-world blockchain.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559356](https://doi.org/10.1145/3548606.3559356)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559356](https://dl.acm.org/doi/pdf/10.1145/3548606.3559356)
## Squirrel: Efficient Synchronized Multi-Signatures from Lattices.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#squirrel-efficient-synchronized-multi-signatures-from-lattices)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#squirrel-efficient-synchronized-multi-signatures-from-lattices)
### Authors
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
* Zhenfei Zhang, Ethereum Foundation, Boston, MA, USA
### Abstract
> The focus of this work are multi-signatures schemes in the synchronized setting. A multi-signature scheme allows multiple signatures for the same message but from independent signers to be compressed into one short aggregated signature, which allows verifying all of the signatures simultaneously. In the synchronized setting, the signing algorithm takes the current time step as an additional input. It is assumed that no signer signs more than one message per time step and we aim to aggregate signatures for the same message and same time step. This setting is particularly useful in the context of blockchains, where validators are naturally synchronized by the blocks they sign.  We present Squirrel, a concretely efficient lattice-based multi-signature scheme in the synchronized setting that works for a bounded number of 2τ time steps and allows for aggregating up to ρ signatures at each step, where both τ and ρ are public parameters upon which the efficiency of our scheme depends. Squirrel allows for non-interactive aggregation of independent signatures and is proven secure in the random oracle model in the presence of rogue-key attacks assuming the hardness of the short integer solution problem in a polynomial ring. We provide a careful analysis of all parameters and show that Squirrel can be instantiated with good concrete efficiency. For τ = 24 and ρ = 4096, a signer could sign a new message every 10 seconds for 5 years non-stop. Assuming the signer has a cache of 112 MB, signing takes 68 ms and verification of an aggregated signature takes 36 ms. The size of the public key is 1 KB, the size of an individual signature is 52 KB, and the size of an aggregated signature is 771 KB.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560655](https://doi.org/10.1145/3548606.3560655)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560655](https://dl.acm.org/doi/pdf/10.1145/3548606.3560655)
## Am I Private and If So, how Many?: Communicating Privacy Guarantees of Differential Privacy with Risk Communication Formats.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#am-i-private-and-if-so-how-many-communicating-privacy-guarantees-of-differential-privacy-with-risk-communication-formats)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#am-i-private-and-if-so-how-many-communicating-privacy-guarantees-of-differential-privacy-with-risk-communication-formats)
### Authors
* Daniel Franzen, Freie Universität Berlin, Berlin, Germany
* Saskia Nuñez von Voigt, Technische Universität Berlin, Berlin, Germany
* Peter Sörries, Freie Universität Berlin, Berlin, Germany
* Florian Tschorsch, Technische Universität Berlin, Humboldt-Universität zu Berlin, Berlin, Germany
* Claudia Müller-Birn, Freie Universität Berlin, Berlin, Germany
### Abstract
> Every day, we have to decide multiple times, whether and how much personal data we allow to be collected. This decision is not trivial, since there are many legitimate and important purposes for data collection, for examples, the analysis of mobility data to improve urban traffic and transportation. However, often the collected data can reveal sensitive information about individuals. Recently visited locations can, for example, reveal information about political or religious views or even about an individual's health. Privacy-preserving technologies, such as differential privacy (DP), can be employed to protect the privacy of individuals and, furthermore, provide mathematically sound guarantees on the maximum privacy risk. However, they can only support informed privacy decisions, if individuals understand the provided privacy guarantees. This article proposes a novel approach for communicating privacy guarantees to support individuals in their privacy decisions when sharing data. For this, we adopt risk communication formats from the medical domain in conjunction with a model for privacy guarantees of DP to create quantitative privacy risk notifications.   We conducted a crowd-sourced study with 343 participants to evaluate how well our notifications conveyed the privacy risk information and how confident participants were about their own understanding of the privacy risk.   Our findings suggest that these new notifications can communicate the objective information similarly well to currently used qualitative notifications, but left individuals less confident in their understanding. We also discovered that several of our notifications and the currently used qualitative notification disadvantage individuals with low numeracy: these individuals appear overconfident compared to their actual understanding of the associated privacy risks and are, therefore, less likely to seek the needed additional information before an informed decision.   The promising results allow for multiple directions in future research, for example, adding visual aids or tailoring privacy risk communication to characteristics of the individuals.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560693](https://doi.org/10.1145/3548606.3560693)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560693](https://dl.acm.org/doi/pdf/10.1145/3548606.3560693)
## Understanding the How and the Why: Exploring Secure Development Practices through a Course Competition.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-the-how-and-the-why-exploring-secure-development-practices-through-a-course-competition)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-the-how-and-the-why-exploring-secure-development-practices-through-a-course-competition)
### Authors
* Kelsey R. Fulton, University of Maryland, College Park, MD, USA
* Daniel Votipka, Tufts University, Medford, MA, USA
* Desiree Abrokwa, University of Maryland, College Park, MD, USA
* Michelle L. Mazurek, University of Maryland, College Park, MD, USA
* Michael Hicks, University of Maryland and Amazon, College Park, MD, USA
* James Parker, Galois, Inc., Portland, OR, USA
### Abstract
> This paper presents the results of in-depth study of 14 teams' development processes during a three-week undergraduate course organized around a secure coding competition. Contest participants were expected to first build code to a specification---emphasizing correctness, performance, and security---and then to find vulnerabilities in other teams' code while fixing discovered vulnerabilities in their own code. Our study aimed to understand why developers introduce different vulnerabilities, the ways they evaluate programs for vulnerabilities, and why different vulnerabilities are (not) found and (not) fixed. We used iterative open coding to systematically analyze contest data including code, commit messages, and team design documents. Our results point to the importance of existing best practices for secure development, the use of security tools, and development team organization.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560569](https://doi.org/10.1145/3548606.3560569)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560569](https://dl.acm.org/doi/pdf/10.1145/3548606.3560569)
## "Is your explanation stable?": A Robustness Evaluation Framework for Feature Attribution.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#is-your-explanation-stable-a-robustness-evaluation-framework-for-feature-attribution)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#is-your-explanation-stable-a-robustness-evaluation-framework-for-feature-attribution)
### Authors
* Yuyou Gan, Zhejiang University, Hangzhou, China
* Yuhao Mao, Zhejiang University & ETH Zürich, Hangzhou, China
* Xuhong Zhang, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University, Hangzhou, China
* Yuwen Pu, Zhejiang University, Hangzhou, China
* Meng Han, Zhejiang University, Hangzhou, China
* Jianwei Yin, Zhejiang University, Hangzhou, China
* Ting Wang, The Pennsylvania State University, State College, PA, USA
### Abstract
> Neural networks have become increasingly popular. Nevertheless, understanding their decision process turns out to be complicated. One vital method to explain a models' behavior is feature attribution, i.e., attributing its decision to pivotal features. Although many algorithms are proposed, most of them aim to improve the faithfulness (fidelity) to the model. However, the real environment contains many random noises, which may cause the feature attribution maps to be greatly perturbed for similar images. More seriously, recent works show that explanation algorithms are vulnerable to adversarial attacks, generating the same explanation for a maliciously perturbed input. All of these make the explanation hard to trust in real scenarios, especially in security-critical applications. To bridge this gap, we propose Median Test for Feature Attribution (MeTFA) to quantify the uncertainty and increase the stability of explanation algorithms with theoretical guarantees. MeTFA is method-agnostic, i.e., it can be applied to any feature attribution method. MeTFA has the following two functions: (1) examine whether one feature is significantly important or unimportant and generate a MeTFA-significant map to visualize the results; (2) compute the confidence interval of a feature attribution score and generate a MeTFA-smoothed map to increase the stability of the explanation. Extensive experiments show that MeTFA improves the visual quality of explanations and significantly reduces the instability while maintaining the faithfulness of the original method. To quantitatively evaluate MeTFA's faithfulness and stability, we further propose several robust faithfulness metrics, which can evaluate the faithfulness of an explanation under different noise settings. Experiment results show that the MeTFA-smoothed explanation can significantly increase the robust faithfulness. In addition, we use two typical applications to show MeTFA's potential in the applications. First, when being applied to the SOTA explanation method to locate context bias for semantic segmentation models, MeTFA-significant explanations use far smaller regions to maintain 99%+ faithfulness. Second, when testing with different explanation-oriented attacks, MeTFA can help defend vanilla, as well as adaptive, adversarial attacks against explanations.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559392](https://doi.org/10.1145/3548606.3559392)
## Secure Auctions in the Presence of Rational Adversaries.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#secure-auctions-in-the-presence-of-rational-adversaries)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#secure-auctions-in-the-presence-of-rational-adversaries)
### Authors
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Bhavana Kanukurthi, Indian Institute of Science, Bengaluru, India
* Girisha Shankar, Indian Institute of Science, Bengaluru, India
### Abstract
> Sealed bid auctions are used to allocate a resource among a set of interested parties. Traditionally, auctions need the presence of a trusted auctioneer to whom the bidders provide their private bid values. Existence of such a trusted party is not an assumption easily realized in practice. Generic secure computation protocols can be used to remove a trusted party. However, generic techniques result in inefficient protocols, and typically do not provide fairness -- that is, a corrupt party can learn the output and abort the protocol thereby preventing other parties from learning the output.  At CRYPTO 2009, Miltersen, Nielsen and Triandopoulos~\citeC:MilNieTri09, introduced the problem of building auctions that are secure against rational bidders. Such parties are modeled as self-interested agents who care more about maximizing their utility than about learning information about bids of other agents. To realize this, they put forth a novel notion of information utility and introduce a game-theoretic framework that helps analyse protocols while taking into account both information utility as well as monetary utility. Unfortunately, their construction makes use a of generic MPC protocol and, consequently, the authors do not analyze the concrete efficiency of their protocol.   In this work, we construct the first concretely efficient and provably secure protocol for First Price Auctions in therational setting. Our protocol guarantees privacy, public verifiability and fairness. Inspired by~\citeC:MilNieTri09, we put forth a solution concept that we callPrivacy Enhanced Computational Weakly Dominant Strategy Equilibrium that captures parties' privacy and monetary concerns in the game theoretic context, and show that our protocol realizes this. We believe this notion to be of independent interest.  Our protocol is crafted specifically for the use case of auctions, is simple, using off-the-shelf cryptographic components. Executing our auction protocol on commodity hardware with 30 bidders, with bids of length 10, our protocol runs to completion in 0.429s and has total communication of 82KB.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560706](https://doi.org/10.1145/3548606.3560706)
## Dumbo-NG: Fast Asynchronous BFT Consensus with Throughput-Oblivious Latency.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dumbo-ng-fast-asynchronous-bft-consensus-with-throughput-oblivious-latency)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dumbo-ng-fast-asynchronous-bft-consensus-with-throughput-oblivious-latency)
### Authors
* Yingzi Gao, Institute of Software Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Yuan Lu, Institute of Software Chinese Academy of Sciences, Beijing, China
* Zhenliang Lu, The University of Sydney, Sydney, NSW, Australia
* Qiang Tang, The University of Sydney, Sydney, NSW, Australia
* Jing Xu, Institute of Software Chinese Academy of Sciences, Beijing, China
* Zhenfeng Zhang, Institute of Software Chinese Academy of Sciences, Beijing, China
### Abstract
> Despite recent progresses of practical asynchronous Byzantine-fault tolerant (BFT) consensus, the state-of-the-art designs still suffer from suboptimal performance. Particularly, to obtain maximum throughput, most existing protocols \rev with guaranteed linear amortized communication complexity require each participating node to broadcast a huge batch of transactions, which dramatically sacrifices latency. Worse still, the ƒ slowest nodes' broadcasts might never be agreed to output and thus can be censored (where ƒ is the number of faults). Implementable mitigation to the threat either uses computationally costly threshold encryption or incurs communication blow-up by letting the honest nodes to broadcast redundant transactions, thus causing further efficiency issues. We present Dumbo NG, a novel asynchronous BFT consensus (atomic broadcast) to solve the remaining practical issues. Its technical core is a non-trivial direct reduction from asynchronous atomic broadcast to multi-valued validated Byzantine agreement (MVBA) with quality property (which ensures the MVBA output is from honest nodes with 1/2 probability). Most interestingly, the new protocol structure empowers concurrent execution of transaction dissemination and asynchronous agreement. This brings about two benefits: (i) the throughput-latency tension is resolved to approach peak throughput with minimal increase in latency; (ii) the transactions broadcasted by any honest node can be agreed to output, thus conquering the censorship threat with no extra cost. We implement Dumbo-NG with using the current fastest GLL+22 MVBA with quality (NDSS'22) and compare it to the state-of-the-art asynchronous BFT with guaranteed censorship resilience including Dumbo (CCS'20) and Speeding-Dumbo (NDSS'22). Along the way, we apply the techniques from Speeding-Dumbo to DispersedLedger (NSDI'22) and obtain an improved variant of DispersedLedger called Dumbo-DLfor a comprehensive comparison. Extensive experiments (over up to 64 AWS EC2 nodes across 16 AWS regions) reveal: Dumbo-NG realizes a peak throughput 4-8x over Dumbo, 2-4x over Speeding-Dumbo, and 2-3x over sDumbo-DL for varying scales; More importantly, Dumbo-NG's latency, which is lowest among all tested protocols, can almost remain stable when throughput grows.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559379](https://doi.org/10.1145/3548606.3559379)
## PACMem: Enforcing Spatial and Temporal Memory Safety via ARM Pointer Authentication.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pacmem-enforcing-spatial-and-temporal-memory-safety-via-arm-pointer-authentication)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pacmem-enforcing-spatial-and-temporal-memory-safety-via-arm-pointer-authentication)
### Authors
* Yuan Li, Tsinghua University, Beijing, China
* Wende Tan, Tsinghua University, Beijing, China
* Zhizheng Lv, Tsinghua University, Beijing, China
* Songtao Yang, Tsinghua University, Beijing, China
* Mathias Payer, EPFL, Lausanne, Switzerland
* Ying Liu, Tsinghua University & Zhongguancun Lab, Beijing, China
* Chao Zhang, Tsinghua University & Zhongguancun Lab, Beijing, China
### Abstract
> Memory safety is a key security property that stops memory corruption vulnerabilities. Different types of memory safety enforcement solutions have been proposed and adopted by sanitizers or mitigations to catch and stop such bugs, at the development or deployment phase. However, existing solutions either provide partial memory safety or have overwhelmingly high performance overheads. In this paper, we present a novel sanitizer PACMem to efficiently catch spatial and temporal memory safety bugs. PACMem removes the majority of the overheads by sealing metadata in pointers through the COTS hardware feature -- ARM PA (Pointer Authentication) and saving the overhead of pointer metadata tracking. We have developed a prototype of PACMem and systematically evaluated its security and performance on the Magma, Juliet, Nginx, and SPEC CPU2017 test suites. In our evaluation, PACMem shows no false positives together with negligible false negatives, while introducing stronger bug detection capabilities and lower performance overheads than state-of-the-art sanitizers, including HWASan, ASan, SoftBound+CETS, Memcheck, LowFat, and PTAuth. Compared to the widely deployed ASan, PACMem has no false positives and much fewer false negatives and reduces the runtime overheads by 15.80% and the memory overheads by 71.58%.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560598](https://doi.org/10.1145/3548606.3560598)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560598](https://dl.acm.org/doi/pdf/10.1145/3548606.3560598)
## Auditing Membership Leakages of Multi-Exit Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#auditing-membership-leakages-of-multi-exit-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#auditing-membership-leakages-of-multi-exit-networks)
### Authors
* Zheng Li, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yiyong Liu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Xinlei He, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ning Yu, Salesforce Research, Palo Alto, CA, USA
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Relying on the truth that not all inputs require the same level of computational cost to produce reliable predictions, multi-exit networks are gaining attention as a prominent approach for pushing the limits of efficient deployment. Multi-exit networks endow a backbone model with early exits, allowing predictions at intermediate layers of the model and thus saving computation time and energy. However, various current designs of multi-exit networks are only considered to achieve the best trade-off between resource usage efficiency and prediction accuracy, the privacy risks stemming from them have never been explored. This prompts the need for a comprehensive investigation of privacy risks in multi-exit networks. In this paper, we perform the first privacy analysis of multi-exit networks through the lens of membership leakages. In particular, we first leverage the existing attack methodologies to quantify the multi-exit networks' vulnerability to membership leakages. Our experimental results show that multi-exit networks are less vulnerable to membership leakages, and the exit (number and depth) attached to the backbone model is highly correlated with the attack performance. Furthermore, we propose a hybrid attack that exploits the exit information to improve the performance of existing attacks. We evaluate membership leakage threat caused by our hybrid attack under three different adversarial setups, ultimately arriving at a model-free and data-free adversary. These results clearly demonstrate that our hybrid attacks are very broadly applicable, thereby the corresponding risks are much more severe than shown by existing membership inference attacks. We further present a defense mechanism called TimeGuard specifically for multi-exit networks and show that TimeGuard mitigates the newly proposed attacks perfectly.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559359](https://doi.org/10.1145/3548606.3559359)
## Overo: Sharing Private Audio Recordings.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#overo-sharing-private-audio-recordings)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#overo-sharing-private-audio-recordings)
### Authors
* Jaemin Lim, Hanyang University, Ansan, Republic of Korea
* Kiyeon Kim, Hanyang University, Ansan, Republic of Korea
* Hyunwoo Yu, Hanyang University, Ansan, Republic of Korea
* Suk-Bok Lee, Hanyang University, Ansan, Republic of Korea
### Abstract
> The use of smartphones as voice recorders has made it easy to record audios as proof of conversations, but sharing of such audio evidence incurs speech and voice privacy risks. However, protecting speech/voice privacy without losing audio authenticity is challenging. The conventional post-process redaction and voice conversion of audio recordings, which invalidate their original signatures, make the audio unverifiable and prone to tampering. In this paper, we present Overo, an audio recording/sharing solution that supports privacy processing without losing audio authenticity. Overo records a realtime audio stream in the standard AAC-encoded format and allows privacy post-processing prior to sharing of audios while keeping their original signatures valid (even after the post redaction and voice conversion), guaranteeing no tampering since the time of their recording. Therefore, users can post-process their recordings to desired levels of privacy on speech (what content to redact) and speakers (whose voice to disguise) at the time of audio release, and still prove their authenticity. Overo is readily implementable in today's commodity smartphones. Our prototype on iPhones/Android phones demonstrates the production of AAC-compliant, tamperproof, and self-authenticating audios with speech/voice privacy protected based on users' post-recording decisions.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560572](https://doi.org/10.1145/3548606.3560572)
## InviCloak: An End-to-End Approach to Privacy and Performance in Web Content Distribution.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#invicloak-an-end-to-end-approach-to-privacy-and-performance-in-web-content-distribution)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#invicloak-an-end-to-end-approach-to-privacy-and-performance-in-web-content-distribution)
### Authors
* Shihan Lin, Duke University, Durham, NC, USA
* Rui Xin, Duke University, Durham, NC, USA
* Aayush Goel, Cupertino High School, Cupertino, CA, USA
* Xiaowei Yang, Duke University, Durham, NC, USA
### Abstract
> In today's web ecosystem, a website that uses a Content Delivery Network (CDN) shares its Transport Layer Security (TLS) private key or session key with the CDN. In this paper, we present the design and implementation of InviCloak, a system that protects the confidentiality and integrity of a user and a website's private communications without changing TLS or upgrading a CDN. InviCloak builds a lightweight but secure and practical key distribution mechanism using the existing DNS infrastructure to distribute a new public key associated with a website's domain name. A web client and a website can use the new key pair to build an encryption channel inside TLS. InviCloak accommodates the current web ecosystem. A website can deploy InviCloak unilaterally without a client's involvement to prevent a passive attacker inside a CDN from eavesdropping on their communications. If a client also installs InviCloak's browser extension, the client and the website can achieve end-to-end confidential and untampered communications in the presence of an active attacker inside a CDN. Our evaluation shows that InviCloak increases the median page load times (PLTs) of realistic web pages from 2.0s to 2.1s, which is smaller than the median PLTs (2.8s) of a state-of-the-art TEE-based solution.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559336](https://doi.org/10.1145/3548606.3559336)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559336](https://dl.acm.org/doi/pdf/10.1145/3548606.3559336)
## DirtyCred: Escalating Privilege in Linux Kernel.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dirtycred-escalating-privilege-in-linux-kernel)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dirtycred-escalating-privilege-in-linux-kernel)
### Authors
* Zhenpeng Lin, Northwestern University, Evanston, IL, USA
* Yuhang Wu, Northwestern University, Evanston, IL, USA
* Xinyu Xing, Northwestern University, Evanston, IL, USA
### Abstract
> The kernel vulnerability DirtyPipe was reported to be present in nearly all versions of Linux since 5.8. Using this vulnerability, a bad actor could fulfill privilege escalation without triggering existing kernel protection and exploit mitigation, making this vulnerability particularly disconcerting. However, the success of DirtyPipe exploitation heavily relies on this vulnerability's capability (i.e., injecting data into the arbitrary file through Linux's pipes). Such an ability is rarely seen for other kernel vulnerabilities, making the defense relatively easy. As long as Linux users eliminate the vulnerability, the system could be relatively secure. This work proposes a new exploitation method -- DirtyCred -- pushing other Linux kernel vulnerabilities to the level of DirtyPipe. Technically speaking, given a Linux kernel vulnerability, our exploitation method swaps unprivileged and privileged kernel credentials and thus provides the vulnerability with the DirtyPipe-like exploitability. With this exploitability, a bad actor could obtain the ability to escalate privilege and even escape the container. We evaluated this exploitation approach on 24 real-world kernel vulnerabilities in a fully-protected Linux system. We discovered that DirtyCred could demonstrate exploitability on 16 vulnerabilities, implying DirtyCred's security severity. Following the exploitability assessment, this work further proposes a new kernel defense mechanism. Unlike existing Linux kernel defenses, our new defense isolates kernel credential objects on non-overlapping memory regions based on their own privilege. Our experiment result shows that the new defense introduces primarily negligible overhead.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560585](https://doi.org/10.1145/3548606.3560585)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560585](https://dl.acm.org/doi/pdf/10.1145/3548606.3560585)
## Frequency Throttling Side-Channel Attack.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#frequency-throttling-side-channel-attack)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#frequency-throttling-side-channel-attack)
### Authors
* Chen Liu, Intel Corporation, Hillsboro, OR, USA
* Abhishek Chakraborty, Intel Corporation, Hillsboro, OR, USA
* Nikhil Chawla, Intel Corporation, Hillsboro, OR, USA
* Neer Roggel, Intel Corporation, Rio Rancho, NM, USA
### Abstract
> Modern processors dynamically control their operating frequency to optimize resource utilization, maximize energy savings, and conform to system-defined constraints. If, during the execution of a software workload, the running average of any electrical or thermal parameter exceeds its corresponding predefined threshold value, the power management architecture will reactively adjust CPU frequency to ensure safe operating conditions. In this paper, we demonstrate how such power management-based frequency throttling activity forms a source of timing side-channel information leakage, which can be exploited by an attacker to infer secret data even from a constant-cycle victim workload. The proposed frequency throttling side-channel attack can be launched by both kernel-space and user-space attackers, thus compromising security guarantees provided by isolation boundaries. We validate our attack methodology across different systems and threat models by performing experiments on a constant-cycle implementation of AES algorithm based on AES-NI instructions. The results of our experimental evaluations demonstrate that the attacker can successfully recover all bytes of an AES key by measuring encryption execution times. Finally, we discuss different options to mitigate the threat posed by frequency throttling side-channel attacks, as well as their advantages and disadvantages.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560682](https://doi.org/10.1145/3548606.3560682)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560682](https://dl.acm.org/doi/pdf/10.1145/3548606.3560682)
## Ready Raider One: Exploring the Misuse of Cloud Gaming Services.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ready-raider-one-exploring-the-misuse-of-cloud-gaming-services)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ready-raider-one-exploring-the-misuse-of-cloud-gaming-services)
### Authors
* Guannan Liu, Virginia Tech, Arlington, VA, USA
* Daiping Liu, Palo Alto Networks, Inc., Santa Clara, CA, USA
* Shuai Hao, Old Dominion University, Norfolk, VA, USA
* Xing Gao, University of Delaware, Newark, DE, USA
* Kun Sun, George Mason University, Fairfax, VA, USA
* Haining Wang, Virginia Tech, Arlington, VA, USA
### Abstract
> Cloud gaming has become an emerging computing paradigm in recent years, allowing computer games to offload complex graphics and logic computation to the cloud. To deliver a smooth and high-quality gaming experience, cloud gaming services have invested abundant computing resources in the cloud, including adequate CPUs, top-tier GPUs, and high-bandwidth Internet connections. Unfortunately, the abundant computing resources offered by cloud gaming are vulnerable to misuse and exploitation for malicious purposes. In this paper, we present an in-depth study on security vulnerabilities in cloud gaming services. Specifically, we reveal that adversaries can purposely inject malicious programs/URLs into the cloud gaming services via game mods. Using the provided features such as in-game subroutines, game launch options, and built-in browsers, adversaries are able to execute the injected malicious programs/URLs in cloud gaming services. To demonstrate that such vulnerabilities pose a serious threat, we conduct four proof-of-concept attacks on cloud gaming services. Two of them are to abuse the CPUs and GPUs in cloud gaming services to mine cryptocurrencies with attractive profits and train machine learning models at a trivial cost. The other two are to exploit the high-bandwidth connections provided by cloud gaming for malicious Command & Control and censorship circumvention. Finally, we present several countermeasures for cloud gaming services to protect their valuable assets from malicious exploitation.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560647](https://doi.org/10.1145/3548606.3560647)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560647](https://dl.acm.org/doi/pdf/10.1145/3548606.3560647)
## When Evil Calls: Targeted Adversarial Voice over IP Network.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#when-evil-calls-targeted-adversarial-voice-over-ip-network)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#when-evil-calls-targeted-adversarial-voice-over-ip-network)
### Authors
* Han Liu, Washington University in St. Louis, St. Louis, MO, USA
* Zhiyuan Yu, Washington University in St. Louis, St. Louis, MO, USA
* Mingming Zha, Indiana University Bloomington, Bloomington, IN, USA
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* William Yeoh, Washington University in St. Louis, St. Louis, MO, USA
* Yevgeniy Vorobeychik, Washington University in St. Louis, St. Louis, MO, USA
* Ning Zhang, Washington University in St. Louis, St. Louis, MO, USA
### Abstract
> As the COVID-19 pandemic fundamentally reshaped the remote life and working styles, Voice over IP (VoIP) telephony and video conferencing have become a primary method of connecting communities together. However, little has been done to understand the feasibility and limitations of delivering adversarial voice samples via such communication channels.   In this paper, we propose TAINT - Targeted Adversarial Voice over IP Network, the first targeted, query-efficient, hard label black-box, adversarial attack on commercial speech recognition platforms over VoIP. The unique channel characteristics of VoIP pose significant new challenges, such as signal degradation, random channel noise, frequency selectivity, etc. To address these challenges, we systematically analyze the structure and channel characteristics of VoIP through reverse engineering. A noise-resilient efficient gradient estimation method is then developed to ensure a steady and fast convergence of the adversarial sample generation process.   We demonstrate our attack in both over-the-air and over-the-line settings on four commercial automatic speech recognition (ASR) systems over the five most popular VoIP Conferencing Software (VCS). We show that TAINT can achieve performance that is comparable to the existing methods even with the addition of VoIP channel. Even in the most challenging scenario where there is an active speaker in Zoom, TAINT can still succeed within 10 attempts while staying out of the speaker focus of the video conference.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560671](https://doi.org/10.1145/3548606.3560671)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560671](https://dl.acm.org/doi/pdf/10.1145/3548606.3560671)
## Order-Disorder: Imitation Adversarial Attacks for Black-box Neural Ranking Models.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#order-disorder-imitation-adversarial-attacks-for-black-box-neural-ranking-models)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#order-disorder-imitation-adversarial-attacks-for-black-box-neural-ranking-models)
### Authors
* Jiawei Liu, Wuhan University, Wuhan, UNK, China
* Yangyang Kang, Alibaba Group, Hangzhou, UNK, China
* Di Tang, Indiana University Bloomington, Bloomington, IN, USA
* Kaisong Song, Northeastern University & Alibaba Group, Shenyang, UNK, China
* Changlong Sun, Alibaba Group, Hangzhou, UNK, China
* Xiaofeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Wei Lu, Wuhan University, Wuhan, UNK, China
* Xiaozhong Liu, Worcester Polytechnic Institute, Worcester, MA, USA
### Abstract
> Neural text ranking models have witnessed significant advancement and are increasingly being deployed in practice. Unfortunately, they also inherit adversarial vulnerabilities of general neural models, which have been detected but remain underexplored by prior studies. Moreover, the inherit adversarial vulnerabilities might be leveraged by blackhat SEO to defeat better-protected search engines. In this study, we propose an imitation adversarial attack on black-box neural passage ranking models. We first show that the target passage ranking model can be transparentized and imitated by enumerating critical queries/candidates and then train a ranking imitation model. Leveraging the ranking imitation model, we can elaborately manipulate the ranking results and transfer the manipulation attack to the target ranking model. For this purpose, we propose an innovative gradient-based attack method, empowered by the pairwise objective function, to generate adversarial triggers, which causes premeditated disorderliness with very few tokens. To equip the trigger camouflages, we add the next sentence prediction loss and the language model fluency constraint to the objective function. Experimental results on passage ranking demonstrate the effectiveness of the ranking imitation attack model and adversarial triggers against various SOTA neural ranking models. Furthermore, various mitigation analyses and human evaluation show the effectiveness of camouflages when facing potential mitigation approaches. To motivate other scholars to further investigate this novel and important problem, we make the experiment data and code publicly available.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560683](https://doi.org/10.1145/3548606.3560683)
## Matproofs: Maintainable Matrix Commitment with Efficient Aggregation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#matproofs-maintainable-matrix-commitment-with-efficient-aggregation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#matproofs-maintainable-matrix-commitment-with-efficient-aggregation)
### Authors
* Jing Liu, ShanghaiTech University, Shanghai, China
* Liang Feng Zhang, ShanghaiTech University, Shanghai, China
### Abstract
> We present Matproofs, a matrix commitment scheme that allows one to commit to any matrix and then open any subset of the matrix entries. If we encode any vector as a matrix, by committing to the matrix Matproofs may function well as a vector commitment (VC) scheme. We show that Matproofs are simultaneously concise, aggregatable, easily updatable and maintainable. With these promising features, Matproofs give solutions to payment-only stateless cryptocurrencies with lower bandwidth and computational complexity. Compared with Hyperproofs, the only existing VC scheme that is simultaneously aggregatable, easily updatable and maintainable, Matproofs achieve the additional property of conciseness. Furthermore, in the worst case, the proof aggregation and verification in Matproofs are 700x and 10x faster than Hyperproofs, respectively.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560591](https://doi.org/10.1145/3548606.3560591)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560591](https://dl.acm.org/doi/pdf/10.1145/3548606.3560591)
## Harnessing Perceptual Adversarial Patches for Crowd Counting.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#harnessing-perceptual-adversarial-patches-for-crowd-counting)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#harnessing-perceptual-adversarial-patches-for-crowd-counting)
### Authors
* Shunchang Liu, Beihang University, Beijing, UNK, China
* Jiakai Wang, Zhongguancun Laboratory, Beijing, UNK, China
* Aishan Liu, Beihang University, Beijing, UNK, China
* Yingwei Li, Johns Hopkins University, Baltimore, MD, USA
* Yijie Gao, Beihang University, Beijing, UNK, China
* Xianglong Liu, Beihang University, Beijing, UNK, China
* Dacheng Tao, JD Explore Academy & The University of Sydney, Beijing, China
### Abstract
> Crowd counting, which has been widely adopted for estimating the number of people in safety-critical scenes, is shown to be vulnerable to adversarial examples in the physical world (e.g., adversarial patches). Though harmful, adversarial examples are also valuable for evaluating and better understanding model robustness. However, existing adversarial example generation methods for crowd counting lack strong transferability among different black-box models, which limits their practicability for real-world systems. Motivated by the fact that attacking transferability is positively correlated to the model-invariant characteristics, this paper proposes the Perceptual Adversarial Patch (PAP) generation framework to tailor the adversarial perturbations for crowd counting scenes using the model-shared perceptual features. Specifically, we handcraft an adaptive crowd density weighting approach to capture the invariant scale perception features across various models and utilize the density guided attention to capture the model-shared position perception. Both of them are demonstrated to improve the attacking transferability of our adversarial patches. Extensive experiments show that our PAP could achieve state-of-the-art attacking performance in both the digital and physical world, and outperform previous proposals by large margins (at most +685.7 MAE and +699.5 MSE). Besides, we empirically demonstrate that adversarial training with our PAP can benefit the performance of vanilla models in alleviating several practical challenges in crowd counting scenarios, including generalization across datasets (up to -376.0 MAE and -354.9 MSE) and robustness towards complex backgrounds (up to -10.3 MAE and -16.4 MSE).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560566](https://doi.org/10.1145/3548606.3560566)
## Acquirer: A Hybrid Approach to Detecting Algorithmic Complexity Vulnerabilities.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#acquirer-a-hybrid-approach-to-detecting-algorithmic-complexity-vulnerabilities)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#acquirer-a-hybrid-approach-to-detecting-algorithmic-complexity-vulnerabilities)
### Authors
* Yinxi Liu, The Chinese University of Hong Kong, Hong Kong SAR, China
* Wei Meng, The Chinese University of Hong Kong, Hong Kong SAR, China
### Abstract
> Algorithmic Complexity (AC) Denial-of-Service attacks have been a threat for over twenty years. Attackers craft particular input vectors to trigger the worst-case logic of some code running on the server side, which leads to high resource consumption and performance degradation. In response, several vulnerability detection tools have been developed to help developers prevent such attacks. Nevertheless, these state-of-the-art tools either focus on a specific type of vulnerability or suffer from state explosion. They are either limited to a small detection scope or unable to run efficiently. This paper aims to develop a fully automated approach to effectively and efficiently detecting AC vulnerabilities. We present the design and implementation of Acquirer, which detects AC vulnerabilities in Java programs. Acquirer first statically locates potentially vulnerable structures in the target program, then performs efficient selective path exploration to dynamically verify the existence of two different execution paths with a significant computation cost difference. The vulnerable structures it detects can also help the developers analyze and fix the corresponding vulnerabilities. We evaluated Acquirer with two widely used benchmark datasets and compared it with four state-of-the-art tools. In the evaluation, it detected 22 known AC vulnerabilities, which substantially out performed all the existing tools together. Besides, it discovered 11 previously unknown AC vulnerabilities in popular real-world applications. Our evaluation demonstrates that Acquirer is highly effective and efficient in automatically detecting AC vulnerabilities.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559337](https://doi.org/10.1145/3548606.3559337)
## Membership Inference Attacks by Exploiting Loss Trajectory.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#membership-inference-attacks-by-exploiting-loss-trajectory)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#membership-inference-attacks-by-exploiting-loss-trajectory)
### Authors
* Yiyong Liu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Zhengyu Zhao, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Machine learning models are vulnerable to membership inference attacks in which an adversary aims to predict whether or not a particular sample was contained in the target model's training dataset. Existing attack methods have commonly exploited the output information (mostly, losses) solely from the given target model. As a result, in practical scenarios where both the member and non-member samples yield similarly small losses, these methods are naturally unable to differentiate between them. To address this limitation, in this paper, we propose a new attack method, called TrajectoryMIA, which can exploit the membership information from the whole training process of the target model for improving the attack performance. To mount the attack in the common black-box setting, we leverage knowledge distillation, and represent the membership information by the losses evaluated on a sequence of intermediate models at different distillation epochs, namely distilled loss trajectory, together with the loss from the given target model. Experimental results over different datasets and model architectures demonstrate the great advantage of our attack in terms of different metrics. For example, on CINIC-10, our attack achieves at least 6 times higher true-positive rate at a low false-positive rate of 0.1% than existing methods. Further analysis demonstrates the general effectiveness of our attack in more strict scenarios.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560684](https://doi.org/10.1145/3548606.3560684)
## Empirical Analysis of EIP-1559: Transaction Fees, Waiting Times, and Consensus Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#empirical-analysis-of-eip-1559-transaction-fees-waiting-times-and-consensus-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#empirical-analysis-of-eip-1559-transaction-fees-waiting-times-and-consensus-security)
### Authors
* Yulin Liu, SciEcon CIC, London, United Kingdom
* Yuxuan Lu, Peking University, Beijing, China
* Kartik Nayak, Duke University, Durham, NC, USA
* Fan Zhang, Yale University, New Haven, CT, USA
* Luyao Zhang, Duke Kunshan University, Suzhou, China
* Yinhong Zhao, Duke University, Durham, NC, USA
### Abstract
> A transaction fee mechanism (TFM) is an essential component of a blockchain protocol. However, a systematic evaluation of the real-world impact of TFMs is still absent. Using rich data from the Ethereum blockchain, the mempool, and exchanges, we study the effect of EIP-1559, one of the earliest-deployed TFMs that depart from the traditional first-price auction paradigm. We conduct a rigorous and comprehensive empirical study to examine its causal effect on blockchain transaction fee dynamics, transaction waiting times, and consensus security. Our results show that EIP-1559 improves the user experience by mitigating intrablock differences in the gas price paid and reducing users' waiting times. However, EIP-1559 has only a small effect on gas fee levels and consensus security. In addition, we find that when Ether's price is more volatile, the waiting time is significantly higher. We also verify that a larger block size increases the presence of siblings. These findings suggest new directions for improving TFMs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559341](https://doi.org/10.1145/3548606.3559341)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559341](https://dl.acm.org/doi/pdf/10.1145/3548606.3559341)
## StolenEncoder: Stealing Pre-trained Encoders in Self-supervised Learning.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#stolenencoder-stealing-pre-trained-encoders-in-self-supervised-learning)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#stolenencoder-stealing-pre-trained-encoders-in-self-supervised-learning)
### Authors
* Yupei Liu, Duke University, Durham, NC, USA
* Jinyuan Jia, Duke University, Durham, NC, USA
* Hongbin Liu, Duke University, Durham, NC, USA
* Neil Zhenqiang Gong, Duke University, Durham, NC, USA
### Abstract
> Pre-trained encoders are general-purpose feature extractors that can be used for many downstream tasks. Recent progress in self-supervised learning can pre-train highly effective encoders using a large volume of unlabeled data, leading to the emerging encoder as a service (EaaS). A pre-trained encoder may be deemed confidential because its training often requires lots of data and computation resources as well as its public release may facilitate misuse of AI, e.g., for deepfakes generation. In this paper, we propose the first attack called StolenEncoder to steal pre-trained image encoders. We evaluate StolenEncoder on multiple target encoders pre-trained by ourselves and three real-world target encoders including the ImageNet encoder pre-trained by Google, CLIP encoder pre-trained by OpenAI, and Clarifai's General Embedding encoder deployed as a paid EaaS. Our results show that the encoders stolen by StolenEncoder have similar functionality with the target encoders. In particular, the downstream classifiers built upon a target encoder and a stolen encoder have similar accuracy. Moreover, stealing a target encoder using StolenEncoder requires much less data and computation resources than pre-training it from scratch. We also explore three defenses that perturb feature vectors produced by a target encoder. Our evaluation shows that these defenses are not enough to mitigate StolenEncoder.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560586](https://doi.org/10.1145/3548606.3560586)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560586](https://dl.acm.org/doi/pdf/10.1145/3548606.3560586)
## LoneNeuron: A Highly-Effective Feature-Domain Neural Trojan Using Invisible and Polymorphic Watermarks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#loneneuron-a-highly-effective-feature-domain-neural-trojan-using-invisible-and-polymorphic-watermarks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#loneneuron-a-highly-effective-feature-domain-neural-trojan-using-invisible-and-polymorphic-watermarks)
### Authors
* Zeyan Liu, The University of Kansas, Lawrence, KS, USA
* Fengjun Li, The University of Kansas, Lawrence, KS, USA
* Zhu Li, University of Missouri-Kansas City, Kansas City, MO, USA
* Bo Luo, The University of Kansas, Lawrence, KS, USA
### Abstract
> The wide adoption of deep neural networks (DNNs) in real-world applications raises increasing security concerns. Neural Trojans embedded in pre-trained neural networks are a harmful attack against the DNN model supply chain. They generate false outputs when certain stealthy triggers appear in the inputs. While data-poisoning attacks have been well studied in the literature, code-poisoning and model-poisoning backdoors only start to attract attention until recently. We present a novel model-poisoning neural Trojan, namely LoneNeuron, which responds to feature-domain patterns that transform into invisible, sample-specific, and polymorphic pixel-domain watermarks. With high attack specificity, LoneNeuron achieves a 100% attack success rate, while not affecting the main task performance. With LoneNeuron's unique watermark polymorphism property, the same feature-domain trigger is resolved to multiple watermarks in the pixel domain, which further improves watermark randomness, stealthiness, and resistance against Trojan detection. Extensive experiments show that LoneNeuron could escape state-of-the-art Trojan detectors. LoneNeuron~is also the first effective backdoor attack against vision transformers (ViTs).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560678](https://doi.org/10.1145/3548606.3560678)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560678](https://dl.acm.org/doi/pdf/10.1145/3548606.3560678)
## Detecting Missing-Permission-Check Vulnerabilities in Distributed Cloud Systems.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#detecting-missing-permission-check-vulnerabilities-in-distributed-cloud-systems)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#detecting-missing-permission-check-vulnerabilities-in-distributed-cloud-systems)
### Authors
* Jie Lu, SKLP, Institute of Computing Technology, CAS, Beijing, China
* Haofeng Li, SKLP, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Chen Liu, SKLP, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Lian Li, SKLP, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Beijing, China
* Kun Cheng, Huawei Technologies Co. Ltd, Beijing, China
### Abstract
> Missing- Permission-Check (MPC) vulnerability is a type of bug where permission checks are not enforced for privileged operations. MPC vulnerability is prevalent and can cause severe security impacts. This paper proposes the first tool to detect MPC vulnerabilities in distributed cloud systems. We conduct an in-depth study of 95 real-world MPC vulnerabilities and our findings motivate a new tool named MPChecker. The tool introduces a combined log-static analysis to automatically identify privileged operations by inferring variables representing user owned data and critical system states, whose accesses need to be protected. We have evaluated MPChecker with 6 popular distributed systems. The tool reports 44 new vulnerabilities, and 43 of them have been confirmed and labeled as critical bugs. Moreover, 1 bug is particular dangerous and the developers requested to keep it undisclosed.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560589](https://doi.org/10.1145/3548606.3560589)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560589](https://dl.acm.org/doi/pdf/10.1145/3548606.3560589)
## Bolt-Dumbo Transformer: Asynchronous Consensus As Fast As the Pipelined BFT.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#bolt-dumbo-transformer-asynchronous-consensus-as-fast-as-the-pipelined-bft)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#bolt-dumbo-transformer-asynchronous-consensus-as-fast-as-the-pipelined-bft)
### Authors
* Yuan Lu, Institute of Software, Chinese Academy of Sciences, Beijing, China
* Zhenliang Lu, The University of Sydney, Sydney, NSW, Australia
* Qiang Tang, The University of Sydney, Sydney, NSW, Australia
### Abstract
> An urgent demand of deploying BFT consensus (e.g., atomic broadcast) over the Internet is raised for implementing (permissioned) blockchain services. The deterministic synchronous protocols can be simple and fast in good network conditions, but are subject to denial-of-service (or even safety vulnerability) when synchrony assumption fails. Asynchronous protocols, on the contrary, are robust against the adversarial network, but are substantially more complicated and slower for the inherent use of randomness. Facing the issues, optimistic asynchronous atomic broadcast (Kursawe-Shoup, 2002; Ramasamy-Cachin, 2005) was proposed to improve the normal-case performance of the slow asynchronous consensus. They run a deterministic fastlane if the network condition remains good, and can fall back to a fully asynchronous protocol via a pace-synchronization mechanism (analog to view-change with asynchronous securities) if the fastlane fails. Unfortunately, existing pace-synchronization directly uses a heavy tool of asynchronous multi-valued validated Byzantine agreement (MVBA). When such fallback frequently occurs in the fluctuating wide-area network setting, the benefits of adding fastlane can be eliminated. We present Bolt-Dumbo Transformer (BDT), a generic framework for practical optimistic asynchronous atomic broadcast. At the core of BDT, we set forth a new fastlane abstraction that is simple and fast, while preparing honest parties to gracefully face potential fastlane failures caused by malicious leader or bad network. This enables a highly efficient pace-synchronization to handle fallback. The resulting design reduces a cumbersome MVBA to a variant of the conceptually simplest binary agreement only. Besides detailed security analyses, we also give concrete instantiations of our framework and implement them. Extensive experiments demonstrate that BDT can enjoy both the low latency of deterministic protocols (e.g., 2-chain version of HotStuff and the robustness of state-of-the-art asynchronous protocols in practice.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559346](https://doi.org/10.1145/3548606.3559346)
## TChecker: Precise Static Inter-Procedural Analysis for Detecting Taint-Style Vulnerabilities in PHP Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#tchecker-precise-static-inter-procedural-analysis-for-detecting-taint-style-vulnerabilities-in-php-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#tchecker-precise-static-inter-procedural-analysis-for-detecting-taint-style-vulnerabilities-in-php-applications)
### Authors
* Changhua Luo, The Chinese University of Hong Kong, Hong Kong, China
* Penghui Li, The Chinese University of Hong Kong, Hong Kong, China
* Wei Meng, The Chinese University of Hong Kong, Hong Kong, China
### Abstract
> PHP applications provide various interfaces for end-users to interact with on the Web. They thus are prone to taint-style vulnerabilities such as SQL injection and cross-site scripting. For its high efficiency, static taint analysis is widely adopted to detect taint-style vulnerabilities before application deployment. Unfortunately, due to the high complexity of the PHP language, implementing a precise static taint analysis is difficult. The existing taint analysis solutions suffer from both high false positives and high false negatives because of their incomprehensive inter-procedural analysis and a variety of implementation issues. In this work, we present TChecker, a context-sensitive inter-procedural static taint analysis tool to detect taint-style vulnerabilities in PHP applications. We identify that supporting objects and type systems is critical for statically analyzing programs written in the dynamic language PHP. We first carefully model the PHP objects and the related object-oriented programming features in TChecker. It then iteratively performs an inter-procedural data-flow analysis on PHP objects to refine object types, thus could precisely identify the call targets. We also take a considerable amount of effort in supporting other dynamic features of PHP such as dynamic includes. We comprehensively evaluated TChecker on a diverse set of modern PHP applications and demonstrated its high effectiveness in vulnerability detection. Specifically, TChecker successfully detected 18 previously unknown vulnerabilities in these PHP applications. We compared TChecker with the related static analysis tools and found that it significantly outperformed them by detecting more vulnerabilities. TChecker could also find all the vulnerabilities the existing tools detect with a relatively good precision. We release the source code of our prototype implementation to facilitate future research.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559391](https://doi.org/10.1145/3548606.3559391)
## Proving UNSAT in Zero Knowledge.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#proving-unsat-in-zero-knowledge)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#proving-unsat-in-zero-knowledge)
### Authors
* Ning Luo, Yale University, New Haven, CT, USA
* Timos Antonopoulos, Yale University, New Haven, CT, USA
* William R. Harris, Galois, Inc., Portland, OR, USA
* Ruzica Piskac, Yale University, New Haven, CT, USA
* Eran Tromer, Columbia University, New York City, NY, USA
* Xiao Wang, Northwestern University, Evanston, IL, USA
### Abstract
> Zero-knowledge (ZK) protocols enable one party to prove to others that it knows a fact without revealing any information about the evidence for such knowledge. There exist ZK protocols for all problems in NP, and recent works developed highly efficient protocols for proving knowledge of satisfying assignments to Boolean formulas, circuits and other NP formalisms. This work shows an efficient protocol for the converse: proving formula unsatisfiability in ZK (when the prover posses a non-ZK proof). An immediate practical application is efficiently proving safety of secret programs. The key insight is to prove, in ZK, the validity of resolution proofs of unsatisfiability. This is efficiently realized using an algebraic representation that exploits resolution proofs' structure to represent formula clauses as low-degree polynomials, combined with ZK random-access arguments. Only the proof's dimensions are revealed. We implemented our protocol and used it to prove unsatisfiability of formulas that encode combinatoric problems and program correctness conditions in standard verification benchmarks, including Linux kernel drivers and Intel cryptography modules. The results demonstrate both that our protocol has practical utility, and that its aggressive optimizations, based on non-trivial encodings, significantly improve practical performance.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559373](https://doi.org/10.1145/3548606.3559373)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559373](https://dl.acm.org/doi/pdf/10.1145/3548606.3559373)
## Frequency Estimation in the Shuffle Model with Almost a Single Message.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#frequency-estimation-in-the-shuffle-model-with-almost-a-single-message)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#frequency-estimation-in-the-shuffle-model-with-almost-a-single-message)
### Authors
* Qiyao Luo, Hong Kong University of Science and Technology, Hong Kong, China, Hong Kong
* Yilei Wang, Alibaba Group, Hangzhou, China
* Ke Yi, Hong Kong University of Science and Technology, Hong Kong, China, Hong Kong
### Abstract
> We present a protocol in the shuffle model of differential privacy (DP) for the frequency estimation problem that achieves error ω(1) ⋅ O(log n), almost matching the central-DP accuracy, with 1 + o(1) messages per user. This exhibits a sharp transition phenomenon, as there is a lower bound of Ω (n1/4) if each user is allowed to send only one message. Previously, such a result is only known when the domain size B is o(n). For a large domain, we also need an efficient method to identify the heavy hitters (i.e., elements that are frequent enough). For this purpose, we design a shuffle-DP protocol that uses o(1) messages per user and can identify all heavy hitters in time polylogarithmic in B. Finally, by combining our frequency estimation and the heavy hitter detection protocols, we show how to solve the B-dimensional 1-sparse vector summation problem in the high-dimensional setting B=Ω(n), achieving the optimal central-DP MSE Õ(n) with 1 + o(1) messages per user. In addition to error and message number, our protocols improve in terms of message size and running time as well. They are also very easy to implement. The experimental results demonstrate order-of-magnitude improvement over prior work.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560608](https://doi.org/10.1145/3548606.3560608)
## Feature Inference Attack on Shapley Values.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#feature-inference-attack-on-shapley-values)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#feature-inference-attack-on-shapley-values)
### Authors
* Xinjian Luo, National University of Singapore, Singapore, Singapore
* Yangfan Jiang, National University of Singapore, Singapore, Singapore
* Xiaokui Xiao, National University of Singapore, Singapore, Singapore
### Abstract
> As a solution concept in cooperative game theory, Shapley value is highly recognized in model interpretability studies and widely adopted by the leading Machine Learning as a Service (MLaaS) providers, such as Google, Microsoft, and IBM. However, as the Shapley value-based model interpretability methods have been thoroughly studied, few researchers consider the privacy risks incurred by Shapley values, despite that interpretability and privacy are two foundations of machine learning (ML) models. In this paper, we investigate the privacy risks of Shapley value-based model interpretability methods using feature inference attacks: reconstructing the private model inputs based on their Shapley value explanations. Specifically, we present two adversaries. The first adversary can reconstruct the private inputs by training an attack model based on an auxiliary dataset and black-box access to the model interpretability services. The second adversary, even without any background knowledge, can successfully reconstruct most of the private features by exploiting the local linear correlations between the model inputs and outputs. We perform the proposed attacks on the leading MLaaS platforms, i.e., Google Cloud, Microsoft Azure, and IBM aix360. The experimental results demonstrate the vulnerability of the state-of-the-art Shapley value-based model interpretability methods used in the leading MLaaS platforms and highlight the significance and necessity of designing privacy-preserving model interpretability methods in future studies. To our best knowledge, this is also the first work that investigates the privacy risks of Shapley values.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560573](https://doi.org/10.1145/3548606.3560573)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560573](https://dl.acm.org/doi/pdf/10.1145/3548606.3560573)
## Federated Boosted Decision Trees with Differential Privacy.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#federated-boosted-decision-trees-with-differential-privacy)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#federated-boosted-decision-trees-with-differential-privacy)
### Authors
* Samuel Maddock, University of Warwick, Coventry, United Kingdom
* Graham Cormode, Meta AI, London, United Kingdom
* Tianhao Wang, University of Virginia, Charlottesville, VA, USA
* Carsten Maple, University of Warwick, Coventry, United Kingdom
* Somesh Jha, University of Wisconsin-Madison, Madison, WI, USA
### Abstract
> There is great demand for scalable, secure, and efficient privacy-preserving machine learning models that can be trained over distributed data. While deep learning models typically achieve the best results in a centralized non-secure setting, different models can excel when privacy and communication constraints are imposed. Instead, tree-based approaches such as XGBoost have attracted much attention for their high performance and ease of use; in particular, they often achieve state-of-the-art results on tabular data. Consequently, several recent works have focused on translating Gradient Boosted Decision Tree (GBDT) models like XGBoost into federated settings, via cryptographic mechanisms such as Homomorphic Encryption (HE) and Secure Multi-Party Computation (MPC). However, these do not always provide formal privacy guarantees, or consider the full range of hyperparameters and implementation settings. In this work, we implement the GBDT model under Differential Privacy (DP). We propose a general framework that captures and extends existing approaches for differentially private decision trees. Our framework of methods is tailored to the federated setting, and we show that with a careful choice of techniques it is possible to achieve very high utility while maintaining strong levels of privacy.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560687](https://doi.org/10.1145/3548606.3560687)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560687](https://dl.acm.org/doi/pdf/10.1145/3548606.3560687)
## The Closer You Look, The More You Learn: A Grey-box Approach to Protocol State Machine Learning.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#the-closer-you-look-the-more-you-learn-a-grey-box-approach-to-protocol-state-machine-learning)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#the-closer-you-look-the-more-you-learn-a-grey-box-approach-to-protocol-state-machine-learning)
### Authors
* Chris McMahon Stone, University of Birmingham, Birmingham, United Kingdom
* Sam L. Thomas, BINARLY, Pasadena, CA, USA
* Mathy Vanhoef, KU Leuven, Leuven, Belgium
* James Henderson, University of Birmingham, Birmingham, United Kingdom
* Nicolas Bailluet, École Normale Supérieure, Rennes, France
* Tom Chothia, University of Birmingham, Birmingham, United Kingdom
### Abstract
> We propose a new approach to infer state machine models from protocol implementations. Our new tool, StateInspector, learns protocol states by using novel program analyses to combine observations of run-time memory and I/O. It requires no access to source code and only lightweight execution monitoring of the implementation under test. We demonstrate and evaluate StateInspector's effectiveness on numerous TLS and WPA/2 implementations. In the process, we show StateInspector enables deeper state discovery, increased learning efficiency, and more insight compared to existing approaches. Our method led us to discover several concerning deviations from the standards and vulnerabilities in IWD and WolfSSL, both of which were assigned CVEs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559365](https://doi.org/10.1145/3548606.3559365)
## Securing Reset Operations in NISQ Quantum Computers.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#securing-reset-operations-in-nisq-quantum-computers)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#securing-reset-operations-in-nisq-quantum-computers)
### Authors
* Allen Mi, Yale University, New Haven, CT, USA
* Shuwen Deng, Yale University, New Haven, CT, USA
* Jakub Szefer, Yale University, New Haven, CT, USA
### Abstract
> A secure reset operation could be an enabling technology that allows sharing of a quantum computer among different users, or among different quantum programs of the same user. Today, the dominant method to erase the qubit state is a full system wipe, which effectively resets all the qubits at the same time. In today's superconducting qubit machines from IBM, for example, a full system wipe takes up to 1000 μs, and it fully erases all information in the system. However, with a full system wipe there is no means for only a few qubits to be cleared and assigned to a new user or program; everything has to be erased at the same time. A secure reset operation could allow resetting only a subset of qubits, and it could be built upon existing (insecure) reset operation available from superconducting qubit machines from IBM, for example. The (insecure) reset operation is available today, which can be used to reset the state of a qubit in a time on the order of 10 μs down to 1 μs. The reset operation is thus much faster than a full system wipe. However, as this work demonstrates, it is possible to leak some information across the (insecure) reset operation as it does not perfectly reset the qubit state between two users or programs who may be sequentially scheduled on the same qubit. Further, crosstalk-like effects are observed where reset behavior of one qubit can be inferred from an adjacent qubit. This work analyzes the existing (insecure) reset operation in order to understand how a secure reset operation could be built upon it. This work then describes the design, implementation, and evaluation of the proposed secure reset operation which can reset qubits without leaking information, and retains a factor of 300 speedup over a full system~wipe.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559380](https://doi.org/10.1145/3548606.3559380)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559380](https://dl.acm.org/doi/pdf/10.1145/3548606.3559380)
## Constant Latency in Sleepy Consensus.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#constant-latency-in-sleepy-consensus)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#constant-latency-in-sleepy-consensus)
### Authors
* Atsuki Momose, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### Abstract
> Dynamic participation support is an important feature of Bitcoin's longest-chain protocol and its variants. But these protocols suffer from long latency as a fundamental trade-off. Specifically, the latency depends at least on the following two factors: 1) the desired security level of the protocol, and 2) the actual participation level of the network. Classic BFT protocols, on the other hand, can achieve constant latency but cannot make progress under dynamic participation. In this work, we present a protocol that simultaneously supports dynamic participation and achieves constant latency. Our core technique is to extend the classic BFT approach from static quorum size to dynamic quorum size, i.e., according to the current participation level, while preserving important properties of static quorum. We also present a recovery mechanism for rejoining nodes that is efficient in terms of both communication and storage. Our experimental evaluation shows our protocol has much lower latency than a longest-chain protocol, especially when there is a sudden decrease of participation.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559347](https://doi.org/10.1145/3548606.3559347)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559347](https://dl.acm.org/doi/pdf/10.1145/3548606.3559347)
## Physical Hijacking Attacks against Object Trackers.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#physical-hijacking-attacks-against-object-trackers)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#physical-hijacking-attacks-against-object-trackers)
### Authors
* Raymond Muller, Purdue University, West Lafayette, IN, USA
* Yanmao Man, University of Arizona, Tucson, AZ, USA
* Z. Berkay Celik, Purdue University, West Lafayette, IN, USA
* Ming Li, University of Arizona, Tucson, AZ, USA
* Ryan Gerdes, Virginia Tech, Arlington, VA, USA
### Abstract
> Modern autonomous systems rely on both object detection and object tracking in their visual perception pipelines. Although many recent works have attacked the object detection component of autonomous vehicles, these attacks do not work on full pipelines that integrate object tracking to enhance the object detector's accuracy. Meanwhile, existing attacks against object tracking either lack real-world applicability or do not work against a powerful class of object trackers, Siamese trackers. In this paper, we present AttrackZone, a new physically-realizable tracker hijacking attack against Siamese trackers that systematically determines valid regions in an environment that can be used for physical perturbations. AttrackZone exploits the heatmap generation process of Siamese Region Proposal Networks in order to take control of an object's bounding box, resulting in physical consequences including vehicle collisions and masked intrusion of pedestrians into unauthorized areas. Evaluations in both the digital and physical domain show that AttrackZone achieves its attack goals 92% of the time, requiring only 0.3-3 seconds on average.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559390](https://doi.org/10.1145/3548606.3559390)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559390](https://dl.acm.org/doi/pdf/10.1145/3548606.3559390)
## The Multi-User Security of Triple Encryption, Revisited: Exact Security, Strengthening, and Application to TDES.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#the-multi-user-security-of-triple-encryption-revisited-exact-security-strengthening-and-application-to-tdes)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#the-multi-user-security-of-triple-encryption-revisited-exact-security-strengthening-and-application-to-tdes)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kamakura, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Musashino, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Chofu, Tokyo, Japan
* Kan Yasuda, NTT Social Informatics Laboratories, Musashino, Tokyo, Japan
### Abstract
> We study the security of triple encryption in the multi-user setting with its application to Triple DES (TDES) in mind. Although depreciation of TDES is a global trend, the migration will take the next decade, considering the billions of TDES hardware the industry has invested so far. The multi-user security captures the reality of practical systems with multiple users, substantially impacts security, and is already considered in practical protocols such as TLS 1.3. The best multi-user lower bound of TDES is 43-(3/2) \cdot łog_2 u bits with u users, which is tractable with a standard PC and is unacceptably low. We devise a new proof to improve the multi-user security and show its tightness by giving a concrete attack. The new bound with the TDES parameters is 79-(1/2) \cdot łog_2 u bits. We also propose TEFX that strengthens triple encryption with the FX construction while preserving the compatibility with legacy hardware. TDES with TEFX achieves the multi-user security of 114-(1/2) \cdot łog_2 q bits with q TEFX calls: it achieves 84.5 bits with 2^40 users and 2^21 TEFX calls for each user, which is comparable to that of AES (128-40=88 bits).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560674](https://doi.org/10.1145/3548606.3560674)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560674](https://dl.acm.org/doi/pdf/10.1145/3548606.3560674)
## CERBERUS: Exploring Federated Prediction of Security Events.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cerberus-exploring-federated-prediction-of-security-events)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cerberus-exploring-federated-prediction-of-security-events)
### Authors
* Mohammad Naseri, University College London, London, United Kingdom
* Yufei Han, Inria Rennes, Rennes, France
* Enrico Mariconti, University College London, London, United Kingdom
* Yun Shen, NetApp, Bristol, United Kingdom
* Gianluca Stringhini, Boston University, Boston, MA, USA
* Emiliano De Cristofaro, University College London, London, United Kingdom
### Abstract
> Modern defenses against cyberattacks increasingly rely on proactive approaches, e.g., to predict the adversary's next actions based on past events. Building accurate prediction models requires knowledge from many organizations; alas, this entails disclosing sensitive information, such as network structures, security postures, and policies, which might often be undesirable or outright impossible. In this paper, we explore the feasibility of using Federated Learning (FL) to predict future security events. To this end, we introduce Cerberus, a system enabling collaborative training of Recurrent Neural Network (RNN) models for participating organizations. The intuition is that FL could potentially offer a middle-ground between the non-private approach where the training data is pooled at a central server and the low-utility alternative of only training local models. We instantiate Cerberus on a dataset obtained from a major security company's intrusion prevention product and evaluate it vis-à-vis utility, robustness, and privacy, as well as how participants contribute to and benefit from the system. Overall, our work sheds light on both the positive aspects and the challenges of using FL for this task and paves the way for deploying federated approaches to predictive security.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560580](https://doi.org/10.1145/3548606.3560580)
## Sigstore: Software Signing for Everybody.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sigstore-software-signing-for-everybody)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#sigstore-software-signing-for-everybody)
### Authors
* Zachary Newman, Chainguard, Brooklyn, NY, USA
* John Speed Meyers, Chainguard, Falls Church, VA, USA
* Santiago Torres-Arias, Purdue University, West Lafayette, IN, USA
### Abstract
> Software supply chain compromises are on the rise. From the effects of XCodeGhost to SolarWinds, hackers have identified that targeting weak points in the supply chain allows them to compromise high-value targets such as U.S. government agencies and corporate targets such as Google and Microsoft. Software signing, a promising mitigation for many of these attacks, has seen limited adoption in open-source and enterprise ecosystems. In this paper, we propose Sigstore, a system to provide widespread software signing capabilities. To do so, we designed the system to provide baseline artifact signing capabilities that minimize the adoption barrier for developers. To this end, Sigstore leverages three distinct mechanisms: First, it uses a protocol similar to ACME to authenticate developers through OIDC, tying signatures to existing and widely-used identities. Second, it enables developers to use ephemeral keys to sign their artifacts, reducing the inconvenience and risk of key management. Finally, Sigstore enables user authentication by means of artifact and identity logs, bringing transparency to software signatures. Sigstore is quickly becoming a critical piece of Internet infrastructure with more than 2.2M signatures over critical software such as Kubernetes and Distroless.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560596](https://doi.org/10.1145/3548606.3560596)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560596](https://dl.acm.org/doi/pdf/10.1145/3548606.3560596)
## Freely Given Consent?: Studying Consent Notice of Third-Party Tracking and Its Violations of GDPR in Android Apps.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#freely-given-consent-studying-consent-notice-of-third-party-tracking-and-its-violations-of-gdpr-in-android-apps)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#freely-given-consent-studying-consent-notice-of-third-party-tracking-and-its-violations-of-gdpr-in-android-apps)
### Authors
* Trung Tin Nguyen, CISPA Helmholtz Center for Information Security & Saarland University, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ben Stock, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Adopted in May 2018, the European Union's General Data Protection Regulation (GDPR) requires the consent for processing users' personal data to be freely given, specific, informed, and unambiguous. While prior work has shown that this often is not given through automated network traffic analysis, no research has systematically studied how consent notices are currently implemented and whether they conform to GDPR in mobile apps. To close this research gap, we perform the first large-scale study into consent notices for third-party tracking in Android apps to understand the current practices and the current state of GDPR's consent violations. Specifically, we propose a mostly automated and scalable approach to identify the currently implemented consent notices and apply it to a set of 239,381 Android apps. As a result, we recognize four widely implemented mechanisms to interact with the consent user interfaces from 13,082 apps. We then develop a tool that automatically detects users' personal data sent out to the Internet with different consent conditions based on the identified mechanisms. Doing so, we find 30,160 apps do not even attempt to implement consent notices for sharing users' personal data with third-party data controllers, which mandate explicit consent under GDPR. In contrast, out of 13,082 apps implemented consent notices, we identify 2,688 (20.54%) apps violate at least one of the GDPR consent requirements, such as trying to deceive users into accepting all data sharing or even continuously transmitting data when users have explicitly opted out. To allow developers to address the problems, we send emails to notify affected developers and gather insights from their responses. Our study shows the urgent need for more transparent processing of personal data and supporting developers in this endeavor to comply with legislation, ensuring users can make free and informed choices regarding their data.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560564](https://doi.org/10.1145/3548606.3560564)
## NARRATOR: Secure and Practical State Continuity for Trusted Execution in the Cloud.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#narrator-secure-and-practical-state-continuity-for-trusted-execution-in-the-cloud)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#narrator-secure-and-practical-state-continuity-for-trusted-execution-in-the-cloud)
### Authors
* Jianyu Niu, Southern University of Science and Technology, Shenzhen, China
* Wei Peng, Southern University of Science and Technology, Shenzhen, China
* Xiaokuan Zhang, George Mason University, Fairfax, VA, USA
* Yinqian Zhang, Southern University of Science and Technology, Shenzhen, China
### Abstract
> Public cloud platforms have leveraged Trusted Execution Environment (TEE) technology to provide confidential computing services. However, TEE-protected applications still suffer from rollback or forking attacks, in which their states could be rolled back to a stale version or be forked into multiple versions, resulting in state continuity violations. Existing solutions against these attacks either rely on weak threat models based on centralized trust (e.g., trusted server) or suffer from large performance overheads (e.g., tens of state updates per second). In this paper, we propose Narrator, a secure and practical system, (1) that relies on a blockchain (i.e., decentralized trust) and TEEs, and (2) that provides high-performance state continuity protection like unlimited and fast state updates for applications in cloud TEEs. The intuition behind our design is simple. Our design uses the blockchain to initialize a distributed system of TEEs, laying down the decentralized trust base with a small interaction overhead, while the distributed system provides performant state continuity protection. Our distributed system adopts a customized version of the consistent broadcast protocol and leverages advanced techniques to make state updates processed with one round trip delay on average. We build a proof-of-concept of Narrator on Intel SGX (i.e., a representative design of TEEs) and do extensive experiments to evaluate its performance. Our evaluation results show that in a LAN environment with 5 nodes, Narrator can support about 6k state updates per second, meanwhile keeping the latency as low as 3-8 ms. The throughput is 30x larger than that in ROTE and 70x larger than using a TPM counter.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560620](https://doi.org/10.1145/3548606.3560620)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560620](https://dl.acm.org/doi/pdf/10.1145/3548606.3560620)
## Cart-ology: Intercepting Targeted Advertising via Ad Network Identity Entanglement.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cart-ology-intercepting-targeted-advertising-via-ad-network-identity-entanglement)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cart-ology-intercepting-targeted-advertising-via-ad-network-identity-entanglement)
### Authors
* ChangSeok Oh, Georgia Institute of Technology, Atlanta, GA, USA
* Chris Kanich, University of Illinois Chicago, Chicago, IL, USA
* Damon McCoy, NYU, New York, NY, USA
* Paul Pearce, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> Targeted advertising is a pervasive practice in the advertising ecosystem, with complex representations of user identity central to targeting. Ad networks are incentivized to tie ephemeral cookies across devices to lasting durable identifiers such as email addresses in order to develop comprehensive cross-device user profiles. Third-party ad networks typically do not have relationships with users and must rely on external parties such as merchant websites for durable identity information, introducing intricate trust relationships. We find attackers can exploit these trust relationships to confuse an ad network into linking an unprivileged attacker's browser to a victim's identity, thus "impersonating" the victim to the ad network. We present Advertising Identity Entanglement, a vulnerability to extract specific user browsing behavior from ad networks remotely, knowing only a victim's email address, with no access to the victim, ad network, or websites. This new fundamental flaw in cross-device tracking allows attackers to pass erroneous identity information to third-party ad networks, causing the networks to confuse attacker and victim. Once entangled, the attacker receives advertisements intended for the victim across the entire ad network. We find identity entanglement is a significant user privacy vulnerability where attackers can learn detailed victim browsing activity such as retail websites, products, and even specific apartments or hotels the victim has interacted with. The vulnerability is also bi-directional, with the attacker able to cause specific ads to be shown to the victim, introducing the possibility of embarrassment attacks and blackmail. We have disclosed the vulnerability; Criteo, one of the largest third-party ad networks, acknowledges the attack.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560641](https://doi.org/10.1145/3548606.3560641)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560641](https://dl.acm.org/doi/pdf/10.1145/3548606.3560641)
## Discovering IoT Physical Channel Vulnerabilities.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#discovering-iot-physical-channel-vulnerabilities)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#discovering-iot-physical-channel-vulnerabilities)
### Authors
* Muslum Ozgur Ozmen, Purdue University, West Lafayette, IN, USA
* Xuansong Li, Nanjing University of Science and Technology & Nanjing University, Nanijng, China
* Andrew Chu, University of Chicago, Chicago, IL, USA
* Z. Berkay Celik, Purdue University, West Lafayette, IN, USA
* Bardh Hoxha, Toyota Research Institute North America, Ann Arbor, MI, USA
* Xiangyu Zhang, Purdue University, West Lafayette, IN, USA
### Abstract
> Smart homes contain diverse sensors and actuators controlled by IoT apps that provide custom automation. Prior works showed that an adversary could exploit physical interaction vulnerabilities among apps and put the users and environment at risk, e.g., to break into a house, an adversary turns on the heater to trigger an app that opens windows when the temperature exceeds a threshold. Currently, the safe behavior of physical interactions relies on either app code analysis or dynamic analysis of device states with manually derived policies by developers. However, existing works fail to achieve sufficient breadth and fidelity to translate the app code into their physical behavior or provide incomplete security policies, causing poor accuracy and false alarms.   In this paper, we introduce a new approach, IoTSeer, which efficiently combines app code analysis and dynamic analysis with new security policies to discover physical interaction vulnerabilities. IoTSeer works by first translating sensor events and actuator commands of each app into a physical execution model (PeM) and unifying PeMs to express composite physical execution of apps (CPeM). CPeM allows us to deploy IoTSeer in different smart homes by defining its execution parameters with minimal data collection. IoTSeer supports new security policies with intended/unintended physical channel labels. It then efficiently checks them on the CPeM via falsification, which addresses the undecidability of verification due to the continuous and discrete behavior of IoT devices.   We evaluate IoTSeer in an actual house with 14 actuators, six sensors, and 39 apps. IoTSeer discovers 16 unique policy violations, whereas prior works identify only 2 out of 16 with 18 falsely flagged violations. IoTSeer only requires 30 mins of data collection for each actuator to set the CPeM parameters and is adaptive to newly added, removed, and relocated devices.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560644](https://doi.org/10.1145/3548606.3560644)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560644](https://dl.acm.org/doi/pdf/10.1145/3548606.3560644)
## Eluding Secure Aggregation in Federated Learning via Model Inconsistency.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#eluding-secure-aggregation-in-federated-learning-via-model-inconsistency)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#eluding-secure-aggregation-in-federated-learning-via-model-inconsistency)
### Authors
* Dario Pasquini, EPFL, Lausanne, Switzerland
* Danilo Francati, Aarhus University, Aarhus, Denmark
* Giuseppe Ateniese, George Mason University, Fairfax, VA, USA
### Abstract
> Secure aggregation is a cryptographic protocol that securely computes the aggregation of its inputs. It is pivotal in keeping model updates private in federated learning. Indeed, the use of secure aggregation prevents the server from learning the value and the source of the individual model updates provided by the users, hampering inference and data attribution attacks. In this work, we show that a malicious server can easily elude secure aggregation as if the latter were not in place. We devise two different attacks capable of inferring information on individual private training datasets, independently of the number of users participating in the secure aggregation. This makes them concrete threats in large-scale, real-world federated learning applications. The attacks are generic and equally effective regardless of the secure aggregation protocol used They exploit a vulnerability of the federated learning protocol caused by incorrect usage of secure aggregation and lack of parameter validation. Our work demonstrates that current implementations of federated learning with secure aggregation offer only a ''false sense of security.''

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560557](https://doi.org/10.1145/3548606.3560557)
## Succinct Zero Knowledge for Floating Point Computations.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#succinct-zero-knowledge-for-floating-point-computations)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#succinct-zero-knowledge-for-floating-point-computations)
### Authors
* Sanjam Garg, UC Berkeley & NTT Research, Berkeley, CA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Yinuo Zhang, UC Berkeley, Berkeley, CA, USA
### Abstract
> We study the problem of constructing succinct zero knowledge proof systems for floating point computations. The standard approach to handle floating point computations requires conversion to binary circuits, following the IEEE-754 floating point standard. This approach incurs a poly(w) overhead in prover efficiency for computations with w-bit precision, resulting in very high prover runtimes -- already the key bottleneck in the design of succinct arguments. We make the following contributions: -We propose a new model for verifying floating point computations that guarantees approximate correctness w.r.t. a relative error bound. This model is inspired by numerical analysis, and is very meaningful for applications such as machine learning and scientific computing. -Using this model, we present a general method for constructing succinct zero-knowledge proofs for floating point computations starting from existing public-coin "commit-and-prove'' systems. For computations with w-bit precision, our approach incurs only a log(w) overhead in prover running time. Our compiler nearly preserves (up to a factor of 2) the communication complexity of the underlying protocol, and requires sub-linear verification time. The resulting proof can be made non-interactive in the random oracle model. Concretely, our scheme is ~57x faster than the method following IEEE standard exactly [35] for 32-bit floating point computations. Central to our main result, and of independent interest, is a new batch range proof system in standard prime order groups that does not rely on bit decomposition.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560653](https://doi.org/10.1145/3548606.3560653)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560653](https://dl.acm.org/doi/pdf/10.1145/3548606.3560653)
## Practical Settlement Bounds for Proof-of-Work Blockchains.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#practical-settlement-bounds-for-proof-of-work-blockchains)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#practical-settlement-bounds-for-proof-of-work-blockchains)
### Authors
* Peter Gazi, IOG, Bratislava, Slovakia
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Alexander Russell, University of Connecticut & IOG, Storrs, CT, USA
### Abstract
> Nakamoto proof-of-work ledger consensus currently underlies the majority of deployed cryptocurrencies and smart-contract blockchains. While a long and fruitful line of work has succeeded to identify its exact security region---that is, the set of parametrizations under which it possesses asymptotic security---the existing theory does not provide concrete settlement time guarantees that are tight enough to inform practice. In this work we provide a new approach for obtaining concrete and practical settlement time guarantees suitable for reasoning about deployed systems. We give an efficient method for computing explicit upper bounds on settlement time as a function of primary system parameters: honest and adversarial computational power and a bound on network delays. We implement this computational method and provide a comprehensive sample of concrete bounds for several settings of interest. We also analyze a well-known attack strategy to provide lower bounds on the settlement times. For Bitcoin, for example, our upper and lower bounds are within 90 seconds of each other for 1-hour settlement assuming 10 second network delays and a 10% adversary. In comparison, the best prior result has a gap of 2 hours in the upper and lower bounds with the same parameters.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559368](https://doi.org/10.1145/3548606.3559368)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559368](https://dl.acm.org/doi/pdf/10.1145/3548606.3559368)
## Hecate: Lifting and Shifting On-Premises Workloads to an Untrusted Cloud.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hecate-lifting-and-shifting-on-premises-workloads-to-an-untrusted-cloud)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hecate-lifting-and-shifting-on-premises-workloads-to-an-untrusted-cloud)
### Authors
* Xinyang Ge, Microsoft Research & Databricks, Bellevue, WA, USA
* Hsuan-Chi Kuo, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Weidong Cui, Microsoft Research, Redmond, WA, USA
### Abstract
> Despite the recent exponential growth in cloud adoption, businesses that handle sensitive data (e.g., health and financial sectors) are hesitant to migrate their on-premises IT infrastructure to the public cloud due to the lack of trust on the cloud provider. Confidential computing aims to move the cloud provider out of the trusted computing base. New hardware features such as AMD's SEV-SNP can run a full virtual machine (VM) with confidentiality and integrity protection against the cloud. However, there exist challenges in supporting legacy operating systems and enforcing security policies (e.g., firewalls) in confidential VMs. In this paper, we present Hecate, an L1 hypervisor that runs inside a confidential VM enabled by SEV-SNP. Hecate can support legacy operating systems by running them in a nested VM and enforce various security policies on the nested VM based on the virtualization boundary. The key challenge in designing Hecate is that it cannot rely on the untrusted L0 hypervisor for nested virtualization. To solve it, we repurpose SEV-SNP's newly added privilege dimension called Virtual Machine Privilege Levels (VMPLs) to enable virtualization for a single nested VM. We have built a prototype of Hecate based on the Linux KVM virtualization stack. Our prototype is capable of running MS-DOS, FreeBSD and vanilla Linux without any modification. It also supports security checks on the nested VM such as network firewalls and kernel integrity. When compared with a regular, non-confidential VM, the nested VM enabled by Hecate can achieve a throughput between 57% and 85% for real-world applications such as the Nginx web server and the MySQL database.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560592](https://doi.org/10.1145/3548606.3560592)
## C2C: Fine-grained Configuration-driven System Call Filtering.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#c2c-fine-grained-configuration-driven-system-call-filtering)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#c2c-fine-grained-configuration-driven-system-call-filtering)
### Authors
* Seyedhamed Ghavamnia, Stony Brook University, Stony Brook, NY, USA
* Tapti Palit, Purdue University, West Lafayette, IN, USA
* Michalis Polychronakis, Stony Brook University, Stony Brook, NY, USA
### Abstract
> Configuration options allow users to customize application features according to the desired requirements. While the code that corresponds to disabled features is never executed, it still resides in process memory and comprises part of the application's attack surface, e.g., it can be reused for the construction of exploit code. Automatically reducing the attack surface of disabled application features according to a given configuration is thus a desirable defense-in-depth capability. The intricacies of modern software design and the complexities of popular programming languages, however, introduce significant challenges in automatically deriving the mapping of configuration options to their corresponding application code. In this paper, we present Configuration-to-Code (C2C), a generic configuration-driven attack surface reduction technique that automatically maps configuration options to application code using static code analysis and instrumentation. C2C operates at a fine-grained level by pruning configuration-dependent conditional branches in the control flow graph, allowing the precise identification of a given configuration option's code at the basic block level. At runtime, C2C reduces the application's attack surface by filtering any system calls required exclusively by disabled features. Using popular applications, we show how security-critical system calls (such as execve) can be automatically disabled when not needed, limiting an attacker's vulnerability exploitation capabilities. System call filtering also reduces the exposed attack surface of the underlying Linux kernel, neutralizing 32 additional CVEs (for a total of 88) compared to previous software specialization techniques.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559366](https://doi.org/10.1145/3548606.3559366)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559366](https://dl.acm.org/doi/pdf/10.1145/3548606.3559366)
## Foundations of Coin Mixing Services.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#foundations-of-coin-mixing-services)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#foundations-of-coin-mixing-services)
### Authors
* Noemi Glaeser, University of Maryland & Max Planck Institute for Security and Privacy, College Park, MD, USA
* Matteo Maffei, TU Wien & Christian Doppler Laboratory Blockchain Technologies for the Internet of Things, Vienna, Austria
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
* Erkan Tairi, TU Wien & Christian Doppler Laboratory Blockchain Technologies for the Internet of Things, Vienna, Austria
* Sri Aravinda Krishnan Thyagarajan, Carnegie Mellon University, Pittsburgh, PA, USA
### Abstract
> Coin mixing services allow users to mix their cryptocurrency coins and thus enable unlinkable payments in a way that prevents tracking of honest users' coins by both the service provider and the users themselves. The easy bootstrapping of new users and backwards compatibility with cryptocurrencies (such as Bitcoin) with limited support for scripts are attractive features of this architecture, which has recently gained considerable attention in both academia and industry. A recent work of Tairi et al. [IEEE S&P 2021] formalizes the notion of a coin mixing service and proposes A2L, a new cryptographic protocol that simultaneously achieves high efficiency and interoperability. In this work, we identify a gap in their formal model and substantiate the issue by showing two concrete counterexamples: we show how to construct two encryption schemes that satisfy their definitions but lead to a completely insecure system.   To amend this situation, we investigate secure constructions of coin mixing services. First, we develop the notion of blind conditional signatures (BCS), which acts as the cryptographic core for coin mixing services. We propose game-based security definitions for BCS and propose A2L+, a modified version of the protocol by Tairi et al. that satisfies our security definitions. Our analysis is in an idealized model (akin to the algebraic group model) and assumes the hardness of the one-more discrete logarithm problem. Finally, we propose A2L-UC, another construction of BCS that achieves the stronger notion of UC-security (in the standard model), albeit with a significant increase in computation cost. This suggests that constructing a coin mixing service protocol secure under composition requires more complex cryptographic machinery than initially thought.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560637](https://doi.org/10.1145/3548606.3560637)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560637](https://dl.acm.org/doi/pdf/10.1145/3548606.3560637)
## ATTRITION: Attacking Static Hardware Trojan Detection Techniques Using Reinforcement Learning.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#attrition-attacking-static-hardware-trojan-detection-techniques-using-reinforcement-learning)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#attrition-attacking-static-hardware-trojan-detection-techniques-using-reinforcement-learning)
### Authors
* Vasudev Gohil, Texas A&M University, College Station, TX, USA
* Hao Guo, Texas A&M University, College Station, TX, USA
* Satwik Patnaik, Texas A&M University, College Station, TX, USA
* Jeyavijayan Rajendran, Texas A&M University, College Station, TX, USA
### Abstract
> Stealthy hardware Trojans (HTs) inserted during the fabrication of integrated circuits can bypass the security of critical infrastructures. Although researchers have proposed many techniques to detect HTs, several critical limitations exist, including: (i) a low success rate of HT detection, (ii) high algorithmic complexity, and (iii) a large number of test patterns. Furthermore, as we show in this work the most pertinent drawback of prior (including state-of-the-art) detection techniques stems from an incorrect evaluation methodology, i.e., they assume that an adversary inserts HTs randomly. Such inappropriate adversarial assumptions enable detection techniques to claim high HT detection accuracy, leading to a "false sense of security." To the best of our knowledge, despite more than a decade of research on detecting HTs inserted during fabrication, there have been no concerted efforts to perform a systematic evaluation of HT detection techniques.   In this paper, we play the role of a realistic adversary and question the efficacy of HT detection techniques by developing an automated, scalable, and practical attack framework, ATTRITION, using reinforcement learning (RL). ATTRITION evades eight detection techniques (published in premier security venues, well-cited in academia, etc.) across two HT detection categories, showcasing its agnostic behavior. ATTRITION achieves average attack success rates of 47x and 211x compared to randomly inserted HTs against state-of-the-art logic testing and side channel techniques. To demonstrate ATTRITION's ability in evading detection techniques, we evaluate different designs ranging from the widely-used academic suites (ISCAS-85, ISCAS-89) to larger designs such as the open-source MIPS and mor1kx processors to AES and a GPS module. Additionally, we showcase the impact of ATTRITION generated HTs through two case studies (privilege escalation and kill switch) on mor1kx processor. We envision that our work, along with our released HT benchmarks and models fosters the development of better HT detection techniques.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560690](https://doi.org/10.1145/3548606.3560690)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560690](https://dl.acm.org/doi/pdf/10.1145/3548606.3560690)
## Watch Your Back: Identifying Cybercrime Financial Relationships in Bitcoin through Back-and-Forth Exploration.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#watch-your-back-identifying-cybercrime-financial-relationships-in-bitcoin-through-back-and-forth-exploration)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#watch-your-back-identifying-cybercrime-financial-relationships-in-bitcoin-through-back-and-forth-exploration)
### Authors
* Gibran Gomez, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
* Juan Caballero, IMDEA Software Institute, Madrid, Spain
### Abstract
> Cybercriminals often leverage Bitcoin for their illicit activities. In this work, we propose back-and-forth exploration, a novel automated Bitcoin transaction tracing technique to identify cybercrime financial relationships. Given seed addresses belonging to a cybercrime campaign, it outputs a transaction graph, and identifies paths corresponding to relationships between the campaign under study and external services and other cybercrime campaigns. Back-and-forth exploration provides two key contributions. First, it explores both forward and backwards, instead of only forward as done by prior work, enabling the discovery of relationships that cannot be found by only exploring forward (e.g., deposits from clients of a mixer). Second, it prevents graph explosion by combining a tagging database with a machine learning classifier for identifying addresses belonging to exchanges. We evaluate back-and-forth exploration on 30 malware families. We build oracles for 4 families using Bitcoin for C&C and use them to demonstrate that back-and-forth exploration identifies 13 C&C signaling addresses missed by prior work, 8 of which are fundamentally missed by forward-only explorations. Our approach uncovers a wealth of services used by the malware including 44 exchanges, 11 gambling sites, 5 payment service providers, 4 underground markets, 4 mining pools, and 2 mixers. In 4 families, the relations include new attribution points missed by forward-only explorations. It also identifies relationships between the malware families and other cybercrime campaigns, highlighting how some malware operators participate in a variety of cybercriminal activities.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560587](https://doi.org/10.1145/3548606.3560587)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560587](https://dl.acm.org/doi/pdf/10.1145/3548606.3560587)
## DangZero: Efficient Use-After-Free Detection via Direct Page Table Access.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dangzero-efficient-use-after-free-detection-via-direct-page-table-access)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dangzero-efficient-use-after-free-detection-via-direct-page-table-access)
### Authors
* Floris Gorter, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
* Koen Koning, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
* Herbert Bos, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
* Cristiano Giuffrida, Vrije Universiteit Amsterdam, Amsterdam, Netherlands
### Abstract
> Use-after-free vulnerabilities remain difficult to detect and mitigate, making them a popular source of exploitation. Existing solutions incur impractical performance/memory overhead, require specialized hardware, and/or guarantee only protection, but not detection. In this paper, we propose DangZero, a new solution to detect use-after-free vulnerabilities as they occur. DangZero builds on a traditional page protection and aliasing scheme, where objects are made inaccessible after a free, and subsequent accesses are immediately detected. In contrast to prior solutions using alias-based detection, DangZero relies on direct page table access in ring 0 to provide a much more efficient implementation. The key idea is that, by giving the program's allocator direct access to the page tables, we can efficiently manage and invalidate vulnerable objects. To safely implement this, we build upon a unikernel-like design, where virtualization provides ring-0 (guest-mode) access, isolation, as well as compatibility with existing Linux programs. Moreover, we show direct page table access serves as an efficient building block for garbage collection-style alias reclaiming. Doing so provides the ability to safely reuse freed areas and address the scalability issues plaguing state-of-the-art alias-based solutions. Our experimental results confirm that DangZero provides accurate detection guarantees with significantly lower overhead than competing state-of-the-art solutions (e.g., 18% saturated throughput degradation on long-running programs such as the Nginx web server).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560625](https://doi.org/10.1145/3548606.3560625)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560625](https://dl.acm.org/doi/pdf/10.1145/3548606.3560625)
## Reinforced Concrete: A Fast Hash Function for Verifiable Computation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#reinforced-concrete-a-fast-hash-function-for-verifiable-computation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#reinforced-concrete-a-fast-hash-function-for-verifiable-computation)
### Authors
* Lorenzo Grassi, Radboud University, Nijmegen, Netherlands
* Dmitry Khovratovich, Dusk Network, Luxembourg, Luxembourg
* Reinhard Lüftenegger, Graz University of Technology, Graz, Austria
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Markus Schofnegger, Graz University of Technology, Graz, Austria
* Roman Walch, Graz University of Technology & Know-Center GmbH, Graz, Austria
### Abstract
> We propose a new hash function Reinforced Concrete, which is the first generic purpose hash that is fast both for a zero-knowledge prover and in native x86 computations. It is suitable for a various range of zero-knowledge proofs and protocols, from set membership to generic purpose verifiable computation. Being up to 15x faster than its predecessor Poseidon hash, Reinforced Concrete inherits security from traditional time-tested schemes such as AES, whereas taking the zero-knowledge performance from a novel and efficient decomposition of a prime field into compact buckets. The new hash function is suitable for a wide range of applications like privacy-preserving cryptocurrencies, verifiable encryption, protocols with state membership proofs, or verifiable computation. It may serve as a drop-in replacement for various prime-field hashes such as variants of MiMC, Poseidon, Pedersen hash, and others.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560686](https://doi.org/10.1145/3548606.3560686)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560686](https://dl.acm.org/doi/pdf/10.1145/3548606.3560686)
## Proof-of-Possession for KEM Certificates using Verifiable Generation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#proof-of-possession-for-kem-certificates-using-verifiable-generation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#proof-of-possession-for-kem-certificates-using-verifiable-generation)
### Authors
* Tim Güneysu, Ruhr University Bochum, Horst Görtz Institute for IT-Security & DFKI GmbH, Cyber-Physical Systems, Bochum, Germany
* Philip Hodges, University of Waterloo, Waterloo, ON, Canada
* Georg Land, Ruhr University Bochum, Horst Görtz Institute for IT-Security & DFKI GmbH, Cyber-Physical Systems, Bochum, Germany
* Mike Ounsworth, Entrust, Ottawa, ON, Canada
* Douglas Stebila, University of Waterloo, Waterloo, ON, Canada
* Greg Zaverucha, Microsoft Research, Redmond, WA, USA
### Abstract
> Certificate authorities in public key infrastructures typically require entities to prove possession of the secret key corresponding to the public key they want certified. While this is straightforward for digital signature schemes, the most efficient solution for public key encryption and key encapsulation mechanisms (KEMs) requires an interactive challenge-response protocol, requiring a departure from current issuance processes. In this work we investigate how to non-interactively prove possession of a KEM secret key, specifically for lattice-based KEMs, motivated by the recently proposed KEMTLS protocol which replaces signature-based authentication in TLS 1.3 with KEM-based authentication. Although there are various zero-knowledge (ZK) techniques that can be used to prove possession of a lattice key, they yield large proofs or are inefficient to generate. We propose a technique called verifiable generation, in which a proof of possession is generated at the same time as the key itself is generated. Our technique is inspired by the Picnic signature scheme and uses the multi-party-computation-in-the-head (MPCitH) paradigm; this similarity to a signature scheme allows us to bind attribute data to the proof of possession, as required by certificate issuance protocols. We show how to instantiate this approach for two lattice-based KEMs in Round 3 of the NIST post-quantum cryptography standardization project, Kyber and FrodoKEM, and achieve reasonable proof sizes and performance. Our proofs of possession are faster and an order of magnitude smaller than the previous best MPCitH technique for knowledge of a lattice key, and in size-optimized cases can be comparable to even state-of-the-art direct lattice-based ZK proofs for Kyber. Our approach relies on a new result showing the uniqueness of Kyber and FrodoKEM secret keys, even if the requirement that all secret key components are small is partially relaxed, which may be of independent interest for improving efficiency of zero-knowledge proofs for other lattice-based statements.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560560](https://doi.org/10.1145/3548606.3560560)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560560](https://dl.acm.org/doi/pdf/10.1145/3548606.3560560)
## SPECPATCH: Human-In-The-Loop Adversarial Audio Spectrogram Patch Attack on Speech Recognition.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#specpatch-human-in-the-loop-adversarial-audio-spectrogram-patch-attack-on-speech-recognition)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#specpatch-human-in-the-loop-adversarial-audio-spectrogram-patch-attack-on-speech-recognition)
### Authors
* Hanqing Guo, Michigan State University, East Lansing, MI, USA
* Yuanda Wang, Michigan State University, East Lansing, MI, USA
* Nikolay Ivanov, Michigan State University, East Lansing, MI, USA
* Li Xiao, Michigan State University, East Lansing, MI, USA
* Qiben Yan, Michigan State University, East Lansing, MI, USA
### Abstract
> In this paper, we propose SpecPatch, a human-in-the loop adversarial audio attack on automated speech recognition (ASR) systems. Existing audio adversarial attacker assumes that the users cannot notice the adversarial audios, and hence allows the successful delivery of the crafted adversarial examples or perturbations. However, in a practical attack scenario, the users of intelligent voice-controlled systems (e.g., smartwatches, smart speakers, smartphones) have constant vigilance for suspicious voice, especially when they are delivering their voice commands. Once the user is alerted by a suspicious audio, they intend to correct the falsely-recognized commands by interrupting the adversarial audios and giving more powerful voice commands to overshadow the malicious voice. This makes the existing attacks ineffective in the typical scenario when the user's interaction and the delivery of adversarial audio coincide. To truly enable the imperceptible and robust adversarial attack and handle the possible arrival of user interruption, we design SpecPatch, a practical voice attack that uses a sub-second audio patch signal to deliver an attack command and utilize periodical noises to break down the communication between the user and ASR systems. We analyze the CTC (Connectionist Temporal Classification) loss forwarding and backwarding process and exploit the weakness of CTC to achieve our attack goal. Compared with the existing attacks, we extend the attack impact length (i.e., the length of attack target command) by 287%. Furthermore, we show that our attack achieves 100% success rate in both over-the-line and over-the-air scenarios amid user intervention.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560660](https://doi.org/10.1145/3548606.3560660)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560660](https://dl.acm.org/doi/pdf/10.1145/3548606.3560660)
## Identifying a Training-Set Attack's Target Using Renormalized Influence Estimation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#identifying-a-training-set-attacks-target-using-renormalized-influence-estimation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#identifying-a-training-set-attacks-target-using-renormalized-influence-estimation)
### Authors
* Zayd Hammoudeh, University of Oregon, Eugene, OR, USA
* Daniel Lowd, University of Oregon, Eugene, OR, USA
### Abstract
> Targeted training-set attacks inject malicious instances into the training set to cause a trained model to mislabel one or more specific test instances. This work proposes the task of target identification, which determines whether a specific test instance is the target of a training-set attack. Target identification can be combined with adversarial-instance identification to find (and remove) the attack instances, mitigating the attack with minimal impact on other predictions. Rather than focusing on a single attack method or data modality, we build on influence estimation, which quantifies each training instance's contribution to a model's prediction. We show that existing influence estimators' poor practical performance often derives from their over-reliance on training instances and iterations with large losses. Our renormalized influence estimators fix this weakness; they far outperform the original estimators at identifying influential groups of training examples in both adversarial and non-adversarial settings, even finding up to 100% of adversarial training instances with no clean-data false positives. Target identification then simplifies to detecting test instances with anomalous influence values. We demonstrate our method's effectiveness on backdoor and poisoning attacks across various data domains, including text, vision, and speech, as well as against a gray-box, adaptive attacker that specifically optimizes the adversarial instances to evade our method. Our source code is available at https://github.com/ZaydH/target_identification.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559335](https://doi.org/10.1145/3548606.3559335)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559335](https://dl.acm.org/doi/pdf/10.1145/3548606.3559335)
## Location Heartbleeding: The Rise of Wi-Fi Spoofing Attack Via Geolocation API.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#location-heartbleeding-the-rise-of-wi-fi-spoofing-attack-via-geolocation-api)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#location-heartbleeding-the-rise-of-wi-fi-spoofing-attack-via-geolocation-api)
### Authors
* Xiao Han, University of South Florida, Tampa, FL, USA
* Junjie Xiong, University of South Florida, Tampa, FL, USA
* Wenbo Shen, Zhejiang University, Hangzhou, China
* Zhuo Lu, University of South Florida, Tampa, FL, USA
* Yao Liu, University of South Florida, Tampa, FL, USA
### Abstract
> Location spoofing attack deceiving a Wi-Fi positioning system has been studied for over a decade. However, it has been challenging to construct a practical spoofing attack in urban areas with dense coverage of legitimate Wi-Fi APs. This paper identifies the vulnerability of the Google Geolocation API, which returns the location of a mobile device based on the information of the Wi-Fi access points that the device can detect. We show that this vulnerability can be exploited by the attacker to reveal the black-box localization algorithms adopted by the Google Wi-Fi positioning system and easily launch the location spoofing attack in dense urban areas with a high success rate. Furthermore, we find that this vulnerability can also lead to severe consequences that hurt user privacy, including the leakage of sensitive information like precise locations, daily activities, and demographics. Ultimately, we discuss the potential countermeasures that may be used to mitigate this vulnerability and location spoofing attack.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560623](https://doi.org/10.1145/3548606.3560623)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560623](https://dl.acm.org/doi/pdf/10.1145/3548606.3560623)
## How to Hide MetaData in MLS-Like Secure Group Messaging: Simple, Modular, and Post-Quantum.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#how-to-hide-metadata-in-mls-like-secure-group-messaging-simple-modular-and-post-quantum)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#how-to-hide-metadata-in-mls-like-secure-group-messaging-simple-modular-and-post-quantum)
### Authors
* Keitaro Hashimoto, Tokyo Institute of Technology & AIST, Tokyo, Japan
* Shuichi Katsumata, AIST & PQShield Ltd., Tokyo, Japan
* Thomas Prest, PQShield SAS, Paris, France
### Abstract
> Secure group messaging (SGM) protocols allow large groups of users to communicate in a secure and asynchronous manner. In recent years, continuous group key agreements (CGKAs) have provided a powerful abstraction to reason on the security properties we expect from SGM protocols. While robust techniques have been developed to protect the contents of conversations in this context, it is in general more challenging to protect metadata (e.g. the identity and social relationships of group members), since their knowledge is often needed by the server in order to ensure the proper function of the SGM protocol. In this work, we provide a simple and generic wrapper protocol that upgrades non-metadata-hiding CGKAs into metadata-hiding CGKAs. Our key insight is to leverage the existence of a unique continuously evolving group secret key shared among the group members. We use this key to perform a group membership authentication protocol that convinces the server in an anonymous manner that a user is a legitimate group member. Our technique only uses a standard signature scheme, and thus, the wrapper protocol can be instantiated from a wide range of assumptions, including post-quantum ones. It is also very efficient, as it increases the bandwidth cost of the underlying CGKA operations by at most a factor of two. To formally prove the security of our protocol, we use the universal composability (UC) framework and model a new ideal functionality ℱmhCGKA capturing the correctness and security guarantee of metadata-hiding CGKA. To capture the above intuition of a "wrapper'' protocol, we also define a restricted ideal functionality ℱctxt CGKA, which roughly captures a non-metadata-hiding CGKA. We then show that our wrapper protocol UC-realizes ℱmhCGKA in the ℱctxtCGKA -hybrid model, which in particular formalizes the intuition that any non-metadata-hiding CGKA can be modularly bootstrapped into metadata-hiding CGKA.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560679](https://doi.org/10.1145/3548606.3560679)
## Behind the Scenes of RPKI.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#behind-the-scenes-of-rpki)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#behind-the-scenes-of-rpki)
### Authors
* Tomas Hlavacek, Fraunhofer SIT, ATHENE, Darmstadt, Germany
* Philipp Jeitner, Fraunhofer SIT, ATHENE, Darmstadt, Germany
* Donika Mirdita, Technische Universität Darmstadt, Fraunhofer SIT, ATHENE, Darmstadt, Germany
* Haya Shulman, Goethe-Universität Frankfurt, Fraunhofer SIT, ATHENE, Darmstadt, Germany
* Michael Waidner, Technische Universität Darmstadt, Fraunhofer SIT, ATHENE, Darmstadt, Germany
### Abstract
> Best practices for making RPKI resilient to failures and attacks recommend using multiple URLs and certificates for publication points as well as multiple relying parties. We find that these recommendations are already supported by 63% of the ASes with RPKI.   In this work we explore the dependency of the RPKI deployments on their DNS components. We find that the resilience of RPKI can be subverted through DNS. We identify two key factors.   First, we find that 42.8% of the ASes with multiple relying parties use a single resolver for looking up the RPKI publication points and the DNS resolvers of 82.9% of the relying parties are all located on a single AS. Both introduce a single point of failure. Second, we also find problems with DNSSEC deployments: more than 24% of the resolvers in RPKI experience failures with signed DNS responses and as a result cannot locate the RPKI publication points and cannot validate RPKI, and 60% of the resolvers that support DNSSEC do not validate records signed with new algorithms, accepting responses also with invalid signatures.   We experimentally find that adversaries can disable RPKI in 56.7% of the ASes that have vulnerable DNS components. Our simulations show that disabling RPKI exposes ASes to prefix hijack attacks. Our work demonstrates, that resilience of systems, like RPKI, cannot be achieved in isolation due to complex inter-dependencies with other systems.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560645](https://doi.org/10.1145/3548606.3560645)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560645](https://dl.acm.org/doi/pdf/10.1145/3548606.3560645)
## On the Privacy Risks of Cell-Based NAS Architectures.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-privacy-risks-of-cell-based-nas-architectures)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-privacy-risks-of-cell-based-nas-architectures)
### Authors
* Hai Huang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Zhikun Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yun Shen, NetApp, Bristol, England UK
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Qi Li, Tsinghua University, Zhongguancun Lab, Beijing, China
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Existing studies on neural architecture search (NAS) mainly focus on efficiently and effectively searching for network architectures with better performance. Little progress has been made to systematically understand if the NAS-searched architectures are robust to privacy attacks while abundant work has already shown that human-designed architectures are prone to privacy attacks. In this paper, we fill this gap and systematically measure the privacy risks of NAS architectures. Leveraging the insights from our measurement study, we further explore the cell patterns of cell-based NAS architectures and evaluate how the cell patterns affect the privacy risks of NAS-searched architectures. Through extensive experiments, we shed light on how to design robust NAS architectures against privacy attacks, and also offer a general methodology to understand the hidden correlation between the NAS-searched architectures and other privacy risks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560619](https://doi.org/10.1145/3548606.3560619)
## Kryvos: Publicly Tally-Hiding Verifiable E-Voting.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#kryvos-publicly-tally-hiding-verifiable-e-voting)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#kryvos-publicly-tally-hiding-verifiable-e-voting)
### Authors
* Nicolas Huber, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Toomas Krips, University of Tartu, Tartu, Estonia
* Julian Liedtke, University of Stuttgart, Stuttgart, Germany
* Johannes Müller, University of Luxembourg, Luxembourg, Luxembourg
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
* Pascal Reisert, University of Stuttgart, Stuttgart, Germany
* Andreas Vogt, University of Applied Sciences and Arts Northwestern Switzerland, Windisch, Switzerland
### Abstract
> Elections are an important corner stone of democratic processes. In addition to publishing the final result (e.g., the overall winner), elections typically publish the full tally consisting of all (aggregated) individual votes. This causes several issues, including loss of privacy for both voters and election candidates as well as so-called Italian attacks that allow for easily coercing voters.   Several e-voting systems have been proposed to address these issues by hiding (parts of) the tally. This property is called tally-hiding. Existing tally-hiding e-voting systems in the literature aim at hiding (part of) the tally from everyone, including voting authorities, while at the same time offering verifiability, an important and standard feature of modern e-voting systems which allows voters and external observers to check that the published election result indeed corresponds to how voters actually voted. In contrast, real elections often follow a different common practice for hiding the tally: the voting authorities internally compute (and learn) the full tally but publish only the final result (e.g., the winner). This practice, which we coin publicly tally-hiding, indeed solves the aforementioned issues for the public, but currently has to sacrifice verifiability due to a lack of practical systems.   In this paper, we close this gap. We formalize the common notion of publicly tally-hiding and propose the first provably secure verifiable e-voting system, called Kryvos, which directly targets publicly tally-hiding elections. We instantiate our system for a wide range of both simple and complex voting methods and various result functions. We provide an extensive evaluation which shows that Kryvos is practical and able to handle a large number of candidates, complex voting methods and result functions. Altogether, Kryvos shows that the concept of publicly tally-hiding offers a new trade-off between privacy and efficiency that is different from all previous tally-hiding systems and which allows for a radically new protocol design resulting in a practical e-voting system.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560701](https://doi.org/10.1145/3548606.3560701)
## Selective MPC: Distributed Computation of Differentially Private Key-Value Statistics.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#selective-mpc-distributed-computation-of-differentially-private-key-value-statistics)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#selective-mpc-distributed-computation-of-differentially-private-key-value-statistics)
### Authors
* Thomas Humphries, University of Waterloo, Waterloo, ON, Canada
* Rasoul Akhavan Mahdavi, University of Waterloo, Waterloo, ON, Canada
* Shannon Veitch, University of Waterloo, Waterloo, ON, Canada
* Florian Kerschbaum, University of Waterloo, Waterloo, ON, Canada
### Abstract
> Key-value data is a naturally occurring data type that has not been thoroughly investigated in the local trust model. Existing local differentially private (LDP) solutions for computing statistics over key-value data suffer from the inherent accuracy limitations of each user adding their own noise. Multi-party computation (MPC) maintains better accuracy than LDP and similarly does not require a trusted central party. However, naively applying MPC to key-value data results in prohibitively expensive computation costs. In this work, we present selective multi-party computation, a novel approach to distributed computation that leverages DP leakage to efficiently and accurately compute statistics over key-value data. By providing each party with a view of a random subset of the data, we can capture subtractive noise. We prove that our protocol satisfies pure DP and is provably secure in the combined DP/MPC model. Our empirical evaluation demonstrates that we can compute statistics over 10,000 keys in 20 seconds and can scale up to 30 servers while obtaining results for a single key in under a second.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560559](https://doi.org/10.1145/3548606.3560559)
## SpecDoctor: Differential Fuzz Testing to Find Transient Execution Vulnerabilities.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#specdoctor-differential-fuzz-testing-to-find-transient-execution-vulnerabilities)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#specdoctor-differential-fuzz-testing-to-find-transient-execution-vulnerabilities)
### Authors
* Jaewon Hur, Seoul National University, Seoul, Republic of Korea
* Suhwan Song, Seoul National University, Seoul, Republic of Korea
* Sunwoo Kim, Samsung Research, Seoul, Republic of Korea
* Byoungyoung Lee, Seoul National University, Seoul, Republic of Korea
### Abstract
> Transient execution vulnerabilities have critical security impacts to software systems since those break the fundamental security assumptions guaranteed by the CPU. Detecting these critical vulnerabilities in the RTL development stage is particularly important, as it offers a chance to fix the vulnerability early before reaching the chip manufacturing stage. This paper proposes SpecDoctor, an automated RTL fuzzer to discover transient execution vulnerabilities in the CPU. To be specific, SpecDoctor designs a fuzzing template, allowing it to test all different scenarios of transient execution vulnerabilities (e.g., Meltdown, Spectre, ForeShadow, etc.) with a single template. Then SpecDoctor performs a multi-phased fuzzing, where each phase is dedicated to solve an individual vulnerability constraint in the RTL context, thereby effectively finding the vulnerabilities. We implemented and evaluated SpecDoctor on two out-of-order RISC-V CPUs, Boom and NutShell-Argo. During the evaluation, SpecDoctor found transient-execution vulnerabilities which share the similar attack vectors as the previous works. Furthermore, SpecDoctor found two interesting variants which abuse unique attack vectors: Boombard, and Birgus. Boombard exploits an unknown implementation bug in RISC-V Boom, exacerbating it into a critical transient execution vulnerability. Birgus launches a Spectre-type attack with a port contention side channel in NutShell CPU, which is constructed using a unique combination of instructions. We reported the vulnerabilities, and both are confirmed by the developers, illustrating the strong practical impact of SpecDoctor.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560578](https://doi.org/10.1145/3548606.3560578)
## Microarchitectural Leakage Templates and Their Application to Cache-Based Side Channels.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#microarchitectural-leakage-templates-and-their-application-to-cache-based-side-channels)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#microarchitectural-leakage-templates-and-their-application-to-cache-based-side-channels)
### Authors
* Ahmad Ibrahim, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Hamed Nemati, Stanford University & CISPA Helmholtz Center for Information Security, Stanford, CA, USA
* Till Schlüter, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Christian Rossow, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### Abstract
> The complexity of modern processor architectures has given rise to sophisticated interactions among their components. Such interactions may result in potential attack vectors in terms of side channels, possibly available to userland exploits to leak secret data. Exploitation and countering of such side channels requires a detailed understanding of the target component. However, such detailed information is commonly unpublished for many CPUs. In this paper, we introduce the concept of Leakage Templates to abstractly describe specific side channels and identify their occurrences in binary applications. We design and implement Plumber, a framework to derive the generic Leakage Templates from individual code sequences that are known to cause leakage (e.g., found by prior work). Plumber uses a combination of instruction fuzzing, instructions' operand mutation and statistical analysis to explore undocumented behavior of microarchitectural optimizations and derive sufficient conditions on vulnerable code inputs that if hold can trigger a distinguishing behavior. Using Plumber we identified novel leakage primitives based on Leakage Templates (for ARM Cortex-A53 and -A72 cores), in particular related to previction (a new premature cache eviction), and prefetching behavior. We show the utility of Leakage Templates by re-identifying a prefetcher-based vulnerability in OpenSSL 1.1.0g first reported by Shin et al. [39].

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560613](https://doi.org/10.1145/3548606.3560613)
## Differentially Private Triangle and 4-Cycle Counting in the Shuffle Model.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#differentially-private-triangle-and-4-cycle-counting-in-the-shuffle-model)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#differentially-private-triangle-and-4-cycle-counting-in-the-shuffle-model)
### Authors
* Jacob Imola, UC San Diego, San Diego, CA, USA
* Takao Murakami, AIST, Tokyo, Japan
* Kamalika Chaudhuri, UC San Diego, San Diego, CA, USA
### Abstract
> Subgraph counting is fundamental for analyzing connection patterns or clustering tendencies in graph data. Recent studies have applied LDP (Local Differential Privacy) to subgraph counting to protect user privacy even against a data collector in social networks. However, existing local algorithms suffer from extremely large estimation errors or assume multi-round interaction between users and the data collector, which requires a lot of user effort and synchronization.   In this paper, we focus on a one-round of interaction and propose accurate subgraph counting algorithms by introducing a recently studied shuffle model. We first propose a basic technique called wedge shuffling to send wedge information, the main component of several subgraphs, with small noise. Then we apply our wedge shuffling to counting triangles and 4-cycles -- basic subgraphs for analyzing clustering tendencies -- with several additional techniques. We also show upper bounds on the estimation error for each algorithm. We show through comprehensive experiments that our one-round shuffle algorithms significantly outperform the one-round local algorithms in terms of accuracy and achieve small estimation errors with a reasonable privacy budget, e.g., smaller than 1 in edge DP.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560659](https://doi.org/10.1145/3548606.3560659)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560659](https://dl.acm.org/doi/pdf/10.1145/3548606.3560659)
## On the Success Rate of Side-Channel Attacks on Masked Implementations: Information-Theoretical Bounds and Their Practical Usage.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-success-rate-of-side-channel-attacks-on-masked-implementations-information-theoretical-bounds-and-their-practical-usage)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#on-the-success-rate-of-side-channel-attacks-on-masked-implementations-information-theoretical-bounds-and-their-practical-usage)
### Authors
* Akira Ito, NTT Social Informatics Laboratories, Musashino, Japan
* Rei Ueno, Tohoku University, Sendai, Japan
* Naofumi Homma, Tohoku University, Sendai, Japan
### Abstract
> This study derives information-theoretical bounds of the success rate (SR) of side-channel attacks on masked implementations. We first develop a communication channel model representing side-channel attacks on masked implementations. We then derive two SR bounds based on the conditional probability distribution and mutual information of shares. The basic idea is to evaluate the upper-bound of the mutual information between the non-masked secret value and the side-channel trace by the conditional probability distribution of shares given its leakage, with a help of the Walsh-Hadamard transform. With the derived theorems, we also prove the security of masking schemes: the SR decreases exponentially with an increase in the number of masking shares, under a much more relaxed condition than the previous proof. To validate and utilize our theorems in practice, we propose a deep-learning-based profiling method for approximating the conditional probability distribution of shares to estimate the SR bound and the number of traces required for attacking a given device. We experimentally confirm that our bounds are much stronger than the conventional bounds on masked implementations, which validates the relevance of our theorems to practice.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560579](https://doi.org/10.1145/3548606.3560579)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560579](https://dl.acm.org/doi/pdf/10.1145/3548606.3560579)
## AI/ML for Network Security: The Emperor has no Clothes.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ai-ml-for-network-security-the-emperor-has-no-clothes)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ai-ml-for-network-security-the-emperor-has-no-clothes)
### Authors
* Arthur S. Jacobs, UFRGS, Porto Alegre, Brazil
* Roman Beltiukov, UCSB, Santa Barbara, CA, USA
* Walter Willinger, NIKSUN Inc., Princeton, NJ, USA
* Ronaldo A. Ferreira, UFMS, Campo Grande, Brazil
* Arpit Gupta, UCSB, Santa Barbara, CA, USA
* Lisandro Z. Granville, UFRGS, Porto Alegre, Brazil
### Abstract
> Several recent research efforts have proposed Machine Learning (ML)-based solutions that can detect complex patterns in network traffic for a wide range of network security problems. However, without understanding how these black-box models are making their decisions, network operators are reluctant to trust and deploy them in their production settings. One key reason for this reluctance is that these models are prone to the problem of underspecification, defined here as the failure to specify a model in adequate detail. Not unique to the network security domain, this problem manifests itself in ML models that exhibit unexpectedly poor behavior when deployed in real-world settings and has prompted growing interest in developing interpretable ML solutions (e.g., decision trees) for "explaining'' to humans how a given black-box model makes its decisions. However, synthesizing such explainable models that capture a given black-box model's decisions with high fidelity while also being practical (i.e., small enough in size for humans to comprehend) is challenging. In this paper, we focus on synthesizing high-fidelity and low-complexity decision trees to help network operators determine if their ML models suffer from the problem of underspecification. To this end, we present Trustee, a framework that takes an existing ML model and training dataset as input and generates a high-fidelity, easy-to-interpret decision tree and associated trust report as output. Using published ML models that are fully reproducible, we show how practitioners can use Trustee to identify three common instances of model underspecification; i.e., evidence of shortcut learning, presence of spurious correlations, and vulnerability to out-of-distribution samples.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560609](https://doi.org/10.1145/3548606.3560609)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560609](https://dl.acm.org/doi/pdf/10.1145/3548606.3560609)
## DISTINCT: Identity Theft using In-Browser Communications in Dual-Window Single Sign-On.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#distinct-identity-theft-using-in-browser-communications-in-dual-window-single-sign-on)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#distinct-identity-theft-using-in-browser-communications-in-dual-window-single-sign-on)
### Authors
* Louis Jannett, Ruhr University Bochum, Bochum, Germany
* Vladislav Mladenov, Ruhr University Bochum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### Abstract
> Single Sign-On (SSO) protocols like OAuth 2.0 and OpenID Connect 1.0 are cornerstones of modern web security, and have received much academic attention. Users sign in at a trusted Identity Provider (IdP) that subsequently allows many Service Providers (SPs) to verify the users' identities. Previous research concentrated on the standardized - called textbook SSO in this paper - authentication flows, which rely on HTTP redirects to transfer identity tokens between the SP and IdP. However, modern web applications like single page apps may not be able to execute the textbook flow because they lose the local state in case of HTTP redirects. By using novel browser technologies, such as postMessage, developers designed and implemented SSO protocols that were neither documented nor analyzed thoroughly. We call them dual-window SSO flows.   In this paper, we provide the first comprehensive evaluation of dual-window SSO flows. In particular, we focus on the In-Browser Communication (InBC) used to exchange authentication tokens between SPs and IdPs in iframes and popups. We automate our analysis by developing Distinct - a tool that dynamically analyzes the JavaScript code executing as part of the SSO flow. Distinct translates the flow into a sequence diagram depicting all communicating entities and their exchanged messages, highlights insecure communication channels, and quantifies novel threats in dual-window SSO flows. We found that 56% of the SPs in the Tranco top 1k list support dual-window SSO. Surprisingly, 28% of the SPs implemented dual-window SSO without using official SDKs, leading to identity theft and XSS in 31% of these self-implemented SPs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560692](https://doi.org/10.1145/3548606.3560692)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560692](https://dl.acm.org/doi/pdf/10.1145/3548606.3560692)
## Are Attribute Inference Attacks Just Imputation?
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#are-attribute-inference-attacks-just-imputation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#are-attribute-inference-attacks-just-imputation)
### Authors
* Bargav Jayaraman, University of Virginia, Charlottesville, VA, USA
* David Evans, University of Virginia, Charlottesville, VA, USA
### Abstract
> Models can expose sensitive information about their training data. In an attribute inference attack, an adversary has partial knowledge of some training records and access to a model trained on those records, and infers the unknown values of a sensitive feature of those records. We study a fine-grained variant of attribute inference we call sensitive value inference, where the adversary's goal is to identify with high confidence some records from a candidate set where the unknown attribute has a particular sensitive value. We explicitly compare attribute inference with data imputation that captures the training distribution statistics, under various assumptions about the training data available to the adversary. Our main conclusions are: (1) previous attribute inference methods do not reveal more about the training data from the model than can be inferred by an adversary without access to the trained model, but with the same knowledge of the underlying distribution as needed to train the attribute inference attack; (2) black-box attribute inference attacks rarely learn anything that cannot be learned without the model; but (3) white-box attacks, which we introduce and evaluate in the paper, can reliably identify some records with the sensitive value attribute that would not be predicted without having access to the model. Furthermore, we show that proposed defenses such as differentially private training and removing vulnerable records from training do not mitigate this privacy risk. The code for our experiments is available at https://github.com/bargavj/EvaluatingDPML.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560663](https://doi.org/10.1145/3548606.3560663)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560663](https://dl.acm.org/doi/pdf/10.1145/3548606.3560663)
## Cache Refinement Type for Side-Channel Detection of Cryptographic Software.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cache-refinement-type-for-side-channel-detection-of-cryptographic-software)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cache-refinement-type-for-side-channel-detection-of-cryptographic-software)
### Authors
* Ke Jiang, Nanyang Technological University, Singapore, Singapore
* Yuyan Bao, University of Waterloo, Waterloo, ON, Canada
* Shuai Wang, Hong Kong University of Science and Technology, Hong Kong, China
* Zhibo Liu, Hong Kong University of Science and Technology, Hong Kong, China
* Tianwei Zhang, Nanyang Technological University, Singapore, Singapore
### Abstract
> Cache side-channel attacks exhibit severe threats to software security and privacy, especially for cryptosystems. In this paper, we propose CaType, a novel refinement type-based tool for detecting cache side channels in crypto software. Compared to previous works, CaType provides the following advantages: (1) For the first time CaType analyzes cache side channels using refinement type over x86 assembly code. It reveals several significant and effective enhancements with refined types, including bit-level granularity tracking, distinguishing different effects of variables, precise type inferences, and high scalability. (2) CaType is the first static analyzer for crypto libraries in consideration of blinding-based defenses. (3) From the perspective of implementation, CaType uses cache layouts of potential vulnerable control-flow branches rather than cache states to suppress false positives. We evaluate CaType in identifying side channel vulnerabilities in real-world crypto software, including RSA, ElGamal, and (EC)DSA from OpenSSL and Libgcrypt. CaType captures all known defects, detects previously-unknown vulnerabilities, and reveals several false positives of previous tools. In terms of performance, CaType is 16X faster than CacheD and 131X faster than CacheS when analyzing the same libraries. These evaluation results confirm the capability of CaType in identifying side channel defects with great precision, efficiency, and scalability.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560672](https://doi.org/10.1145/3548606.3560672)
## Evocatio: Conjuring Bug Capabilities from a Single PoC.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#evocatio-conjuring-bug-capabilities-from-a-single-poc)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#evocatio-conjuring-bug-capabilities-from-a-single-poc)
### Authors
* Zhiyuan Jiang, NUDT, Changsha, China
* Shuitao Gan, SKL-MEAC, Tsinghua University, Wuxi, China
* Adrian Herrera, Australian National University, Canberra, Australia
* Flavio Toffalini, EPFL, Lausanne, Switzerland
* Lucio Romerio, EPFL, Lausanne, Switzerland
* Chaojing Tang, NUDT, Changsha, China
* Manuel Egele, Boston University, Boston, MA, USA
* Chao Zhang, Tsinghua University, BNRist Zhongguancun Lab, Beijing, China
* Mathias Payer, EPFL, Lausanne, Switzerland
### Abstract
> The popularity of coverage-guided greybox fuzzers has led to a tsunami of security-critical bugs that developers must prioritize and fix. Knowing the capabilities a bug exposes (e.g., type of vulnerability, number of bytes read/written) enables prioritization of bug fixes. Unfortunately, understanding a bug's capabilities is a time consuming process, requiring (a) an understanding of the bug's root cause, (b) an understanding how an attacker may exploit the bug, and (c) the development of a patch mitigating these threats. This is a mostly-manual process that is qualitative and arbitrary, potentially leading to a misunderstanding of the bug's capabilities. Evocatio automatically discovers a bug's capabilities. Evocatio analyzes a crashing test case (i.e., an input exposing a bug) to understand the full extent of how an attacker can exploit a bug. Evocatio leverages a capability-guided fuzzer to efficiently uncover new bug capabilities (rather than only generating a single crashing test case for a given bug, as a traditional greybox fuzzer does). We evaluate Evocatio on 38 bugs (34 CVEs and four bug reports) across eight open-source applications. From these bugs, Evocatio: (i) discovered 10× more capabilities (that is, the number of unique capabilities induced by a set of crashes was 10× higher) than AFL++'s crash exploration mode; (ii) converted 19 of the 38 bugs to new bug types (demonstrating the limitations of manual qualitative analysis); and (iii) generated new proof-of-concept (PoC) test cases violating patches for 7 out of 16 tested CVEs, one of which still triggers in the latest version of the software.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560575](https://doi.org/10.1145/3548606.3560575)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560575](https://dl.acm.org/doi/pdf/10.1145/3548606.3560575)
## Understanding IoT Security from a Market-Scale Perspective.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-iot-security-from-a-market-scale-perspective)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-iot-security-from-a-market-scale-perspective)
### Authors
* Xin Jin, The Ohio State University, Columbus, OH, USA
* Sunil Manandhar, IBM T.J. Watson Research Center, Yorktown Heights, NY, USA
* Kaushal Kafle, William & Mary, Williamsburg, VA, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
* Adwait Nadkarni, William & Mary, Williamsburg, VA, USA
### Abstract
> Consumer IoT products and services are ubiquitous; yet, a proper characterization of consumer IoT security is infeasible without an understanding of what IoT products are on the market, i.e., without a market-scale perspective. This paper seeks to close this gap by developing the IoTSpotter framework, which automatically constructs a market-scale snapshot of mobile-IoT apps, i.e., mobile apps that are used as companions or automation providers to IoT devices. IoTSpotter also extracts artifacts that allow us to examine the security of this snapshot in the IoT context (e.g., devices supported by apps, IoT-specific libraries). Using IoTSpotter, we identify 37,783 mobile-IoT apps from Google Play, the largest set of mobile-IoT apps so far, and uncover 7 key results in the process (ℛ1-ℛ7). We leverage this dataset to perform three key security analyses that lead to 10 impactful security findings (F1-F10) that demonstrate the current state of mobile-IoT apps. Our analysis uncovers severe cryptographic violations in 94.11% (863/917) mobile-IoT apps with >1 million installs each, 65 vulnerable IoT-specific libraries affected by 79 unique CVEs, and used by 40 popular apps, and 7,887 apps that is affected by the Janus vulnerability. Finally, a case study with 18 popular mobile-IoT apps uncovers the critical impact of the vulnerabilities in them on important IoT artifacts and functions, motivating the development of mobile security analysis contextualized to IoT.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560640](https://doi.org/10.1145/3548606.3560640)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560640](https://dl.acm.org/doi/pdf/10.1145/3548606.3560640)
## SymLM: Predicting Function Names in Stripped Binaries via Context-Sensitive Execution-Aware Code Embeddings.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#symlm-predicting-function-names-in-stripped-binaries-via-context-sensitive-execution-aware-code-embeddings)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#symlm-predicting-function-names-in-stripped-binaries-via-context-sensitive-execution-aware-code-embeddings)
### Authors
* Xin Jin, The Ohio State University, Columbus, OH, USA
* Kexin Pei, Columbia University, New York, NY, USA
* Jun Yeon Won, The Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
### Abstract
> Predicting function names in stripped binaries is an extremely useful but challenging task, as it requires summarizing the execution behavior and semantics of the function in human languages. Recently, there has been significant progress in this direction with machine learning. However, existing approaches fail to model the exhaustive function behavior and thus suffer from the poor generalizability to unseen binaries. To advance the state of the art, we present a function Symbol name prediction and binary Language Modeling (SymLM) framework, with a novel neural architecture that learns the comprehensive function semantics by jointly modeling the execution behavior of the calling context and instructions via a novel fusing encoder. We have evaluated SymLM with 1,431,169 binary functions from 27 popular open source projects, compiled with 4 optimizations (O0-O3) for 4 different architectures (i.e., x64, x86, ARM, and MIPS) and 4 obfuscations. SymLM outperforms the state-of-the-art function name prediction tools by up to 15.4%, 59.6%, and 35.0% in precision, recall, and F1 score, with significantly better generalizability and obfuscation resistance. Ablation studies also show that our design choices (e.g., fusing components of the calling context and execution behavior) substantially boost the performance of function name prediction. Finally, our case studies further demonstrate the practical use cases of SymLM in analyzing firmware images.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560612](https://doi.org/10.1145/3548606.3560612)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560612](https://dl.acm.org/doi/pdf/10.1145/3548606.3560612)
## P-Verifier: Understanding and Mitigating Security Risks in Cloud-based IoT Access Policies.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#p-verifier-understanding-and-mitigating-security-risks-in-cloud-based-iot-access-policies)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#p-verifier-understanding-and-mitigating-security-risks-in-cloud-based-iot-access-policies)
### Authors
* Ze Jin, Institute of Information Engineering, Chinese Academy of Sciences & School of Cyber Security, University of Chinese Academy of Sciences & Indiana University Bloomington, Beijing, China
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
* Yiwei Fang, Institute of Information Engineering, Chinese Academy of Sciences & School of Cyber Security, University of Chinese Academy of Sciences & Indiana University Bloomington, Beijing, China
* Yan Jia, Nankai University, Tianjin, China
* Bin Yuan, HuaZhong University of Science and Technology, Wuhan, China
* Qixu Liu, Institute of Information Engineering, Chinese Academy of Sciences & School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Modern IoT device manufacturers are taking advantage of the managed Platform-as-a-Service (PaaS) and Infrastructure-as-a-Service (IaaS) IoT clouds (e.g., AWS IoT, Azure IoT) for secure and convenient IoT development/deployment. The IoT access control is achieved by manufacturer-specified, cloud-enforced IoT access policies (cloud-standard JSON documents, called IoT Policies) stating which users can access which IoT devices/resources under what constraints. In this paper, we performed a systematic study on the security of cloud-based IoT access policies on modern PaaS/IaaS IoT clouds. Our research shows that the complexity in the IoT semantics and enforcement logic of the policies leaves tremendous space for device manufacturers to program a flawed IoT access policy, introducing convoluted logic flaws which are non-trivial to reason about. In addition to challenges/mistakes in the design space, it is astonishing to find that mainstream device manufacturers also generally make critical mistakes in deploying IoT Policies thanks to the flexibility offered by PaaS/IaaS clouds and the lack of standard practices for doing so. Our assessment of 36 device manufacturers and 310 open-source IoT projects highlights the pervasiveness and seriousness of the problems, which once exploited, can have serious impacts on IoT users' security, safety, and privacy. To help manufacturers identify and easily fix IoT Policy flaws, we introduce P-Verifier, a formal verification tool that can automatically verify cloud-based IoT Policies. With evaluated high effectiveness and low performance overhead, P-Verifier will contribute to elevating security assurance in modern IoT deployments and access control. We responsibly reported all findings to affected vendors and fixes were deployed or on the way.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560680](https://doi.org/10.1145/3548606.3560680)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560680](https://dl.acm.org/doi/pdf/10.1145/3548606.3560680)
## Private and Reliable Neural Network Inference.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#private-and-reliable-neural-network-inference)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#private-and-reliable-neural-network-inference)
### Authors
* Nikola Jovanovic, ETH Zurich, Zurich, Switzerland
* Marc Fischer, ETH Zurich, Zurich, Switzerland
* Samuel Steffen, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### Abstract
> Reliable neural networks (NNs) provide important inference-time reliability guarantees such as fairness and robustness. Complementarily, privacy-preserving NN inference protects the privacy of client data. So far these two emerging areas have been largely disconnected, yet their combination will be increasingly important.   In this work, we present the first system which enables privacy-preserving inference on reliable NNs. Our key idea is to design efficient fully homomorphic encryption (FHE) counterparts for the core algorithmic building blocks of randomized smoothing, a state-of-the-art technique for obtaining reliable models. The lack of required control flow in FHE makes this a demanding task, as naïve solutions lead to unacceptable runtime.   We employ these building blocks to enable privacy-preserving NN inference with robustness and fairness guarantees in a system called Phoenix. Experimentally, we demonstrate that Phoenix achieves its goals without incurring prohibitive latencies.   To our knowledge, this is the first work which bridges the areas of client data privacy and reliability guarantees for NNs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560709](https://doi.org/10.1145/3548606.3560709)
## A Scalable and Dynamic ACL System for In-Network Defense.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-scalable-and-dynamic-acl-system-for-in-network-defense)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#a-scalable-and-dynamic-acl-system-for-in-network-defense)
### Authors
* Changhun Jung, Ewha Womans University, Seoul, Republic of Korea
* Sian Kim, Ewha Womans University, Seoul, Republic of Korea
* Rhongho Jang, Wayne State University, Detroit, MI, USA
* David Mohaisen, University of Central Florida, Orlando, FL, USA
* DaeHun Nyang, Ewha Womans University, Seoul, Republic of Korea
### Abstract
> In-network/in-switch Access Control List (ACL) is an essential security component of modern networks. In high-speed networks, ACL rules are often placed in a switch's Ternary Content-Addressable Memory (TCAM) for timely ACL match-action and management (e.g. insertion and deletion). However, TCAM-based ACL systems are encountering an scalability issue owing to increasing demand on AI-powered autonomous defenses that detect and block attacks online, which inevitably derives finer-grained ACL rules. Existing solutions minimize the TCAM usage by partially offloading ACL matching into larger Static Random-Access Memory (SRAM) or customized hardware. Nevertheless, current SRAM-based solutions induce high management costs, especially a high rule-deployment latency, which delays time-sensitive defense actions. Also, the customized hardware approaches have its own scalability issue. To support autonomous defenses at a scale, in this paper, we propose an in-switch ACL system called PortCatcher, which breaks the trade-off between scalability and rule management latency. System-wise, we detach layer-4 port matching from TCAM for improving its memory efficiency. Algorithm-wise, we introduce a novel port (range) rule representation concept, called linear range map (LRM), which enables port (range) matching in SRAM-based hash tables. LRM guarantees not only fast and scalable port matching but also low-latency ACL management for timely defenses. With real-world ACL datasets, we show that PortCatcher saves 74%-90% TCAM space compared to state-of-the-art approaches by adding small overhead to SRAM (0.49 SRAM entry per ACL rule). Also, we deploy PortCatcher on a programmable switch to demonstrate that PortCatcher can serve 5-tuple rule matching at a line rate, where port rules are completely matched in SRAM. With a use case study, namely autonomous attack mitigation, we show that PortCatcher has a negligible rule management latency to block attack flows (i.e. 94.42% of rules deployed within 10 ms).

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560606](https://doi.org/10.1145/3548606.3560606)
## TRACER: Signature-based Static Analysis for Detecting Recurring Vulnerabilities.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#tracer-signature-based-static-analysis-for-detecting-recurring-vulnerabilities)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#tracer-signature-based-static-analysis-for-detecting-recurring-vulnerabilities)
### Authors
* Wooseok Kang, KAIST, Daejeon, Republic of Korea
* Byoungho Son, POSTECH, Pohang, Republic of Korea
* Kihong Heo, KAIST, Daejeon, Republic of Korea
### Abstract
> Similar software vulnerabilities recur because developers reuse existing vulnerable code, or make similar mistakes when implementing the same logic. Recently, various analysis techniques have been proposed to find syntactically recurring vulnerabilities via code reuse. However, limited attention has been devoted to semantically recurring ones that share the same vulnerable behavior in different code structures. In this paper, we present a general analysis framework, called TRACER, for detecting such recurring vulnerabilities. TRACER is based on a taint analysis that can detect various types of vulnerabilities. For a given set of known vulnerabilities, the taint analysis extracts vulnerable traces and establishes a signature database of them. When a new unseen program is analyzed, TRACER compares all potentially vulnerable traces reported by the analysis with the known vulnerability signatures. Then, TRACER reports a list of potential vulnerabilities ranked by the similarity score. We evaluate TRACER on 273 Debian packages in C/C++. Our experiment results demonstrate that TRACER is able to find 281 previously unknown vulnerabilities with 6 CVE identifiers assigned.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560664](https://doi.org/10.1145/3548606.3560664)
## HyperDbg: Reinventing Hardware-Assisted Debugging.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hyperdbg-reinventing-hardware-assisted-debugging)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hyperdbg-reinventing-hardware-assisted-debugging)
### Authors
* Mohammad Sina Karvandi, Institute For Research In Fundamental Sciences, Tehran, Iran
* MohammadHosein Gholamrezaei, Chosun University, Gwangju, Republic of Korea
* Saleh Khalaj Monfared, Worcester Polytechnic Institute, Worcester, MA, USA
* Soroush Meghdadizanjani, Stony Brook University, Stony Brook, NY, USA
* Behrooz Abbassi, HyperDbg Organization, Gwangju, Republic of Korea
* Ali Amini, HyperDbg Organization, Gwangju, Republic of Korea
* Reza Mortazavi, Damghan University, Damghan, Iran
* Saeid Gorgin, Chosun University, Gwangju, Republic of Korea
* Dara Rahmati, Shahid Beheshti University, Tehran, Iran
* Michael Schwarz, CISPA Helmholtz Center for Information Security, Saarland, Germany
### Abstract
> Software analysis, debugging, and reverse engineering have a crucial impact in today's software industry. Efficient and stealthy debuggers are especially relevant for malware analysis. However, existing debugging platforms fail to address a transparent, effective, and high-performance low-level debugger due to their detectable fingerprints, complexity, and implementation restrictions.  In this paper,\footnote[2]For the extended version of this paper which includes additional appendices, refer to: https://arxiv.org/abs/2207.05676 . we present a new hypervisor-assisted debugger for high-performance and stealthy debugging of user and kernel applications. To accomplish this, HyperDbg relies on state-of-the-art hardware features available in today's CPUs, such as VT-x and Extended Page Table (EPT). In contrast to other widely used existing debuggers, we design HyperDbg using a custom hypervisor, making it independent of OS functionality or API. We propose hardware-based instruction-level emulation and OS-level API hooking via extended page tables to increase the stealthiness. Our results of the dynamic analysis of 10,853 malware samples show that HyperDbg 's stealthiness allows debugging on average 22% and 26% more samples thanWinDbg andx64dbg, respectively. Moreover, in contrast to existing debuggers, HyperDbg is not detected by any of the 13 tested packers and protectors. We improve the performance over other debuggers by deploying a VMX-compatible script engine, eliminating unnecessary context switches. Our experiment on three concrete debugging scenarios shows that compared toWinDbg as the only kernel debugger, HyperDbg performs step-in, conditional breaks, and syscall recording, 2.98x, 1319x, and 2018x faster, respectively. We finally show real-world applications, such as a 0-day analysis, structure reconstruction for reverse engineering, software performance analysis, and code-coverage analysis.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560649](https://doi.org/10.1145/3548606.3560649)
## RedShift: Transparent SNARKs from List Polynomial Commitments.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#redshift-transparent-snarks-from-list-polynomial-commitments)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#redshift-transparent-snarks-from-list-polynomial-commitments)
### Authors
* Assimakis A. Kattis, New York University, New York, NY, USA
* Konstantin Panarin, Matter Labs, Berlin, Germany
* Alexander Vlasov, Matter Labs, Berlin, Germany
### Abstract
> We introduce an efficient transformation from univariate polynomial commitment based zk-SNARKs to their transparent counterparts. The transformation is achieved with the help of a new IOP primitive which we call a list polynomial commitment. This primitive is applicable for preprocessing zk-SNARKs over both prime and binary fields. We present the primitive itself along with a soundness analysis of the transformation and instantiate it with an existing universal proof system. We also present benchmarks for a proof of concept implementation alongside a comparison with the current non-transparent state-of-the-art. Our results show competitive efficiency both in terms of proof size and generation times. At the 80-bit security level, our benchmarks provide proof generation times of about a minute and proof sizes of around 515 KB for a circuit with one million gates.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560657](https://doi.org/10.1145/3548606.3560657)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560657](https://dl.acm.org/doi/pdf/10.1145/3548606.3560657)
## NTRU-v-um: Secure Fully Homomorphic Encryption from NTRU with Small Modulus.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ntru-v-um-secure-fully-homomorphic-encryption-from-ntru-with-small-modulus)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ntru-v-um-secure-fully-homomorphic-encryption-from-ntru-with-small-modulus)
### Authors
* Kamil Kluczniak, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> NTRUEncrypt is one of the first lattice-based encryption schemes. Furthermore, the earliest fully homomorphic encryption (FHE) schemes rely on the NTRU problem. Currently, NTRU is one of the leading candidates in the NIST post-quantum standardization competition. What makes NTRU appealing is the age of the cryptosystem and relatively good performance.   Unfortunately, FHE based on NTRU became impractical due to efficient attacks on NTRU instantiations with "overstretched'' modulus. In particular, currently, NTRU-based FHE schemes to support a reasonable circuit depth require instantiating NTRU with a very large modulus. Breaking the NTRU problem for such large moduli turns out to be easy. Due to these attacks, any serious work on practical NTRU-based FHE essentially stopped.  In this paper, we reactivate research on practical FHE that can be based on NTRU. We design an efficient bootstrapping scheme in which the noise growth is small enough to keep the modulus to dimension ratio relatively small, thus avoiding the negative consequences of "overstretching'' the modulus. Our bootstrapping algorithm is an accumulator-type bootstrapping scheme analogous to AP/FHEW/TFHE. Finally, we show that we can use the bootstrapping procedure to compute any function over \mathbbZ _t. Consequently, we obtain one of the fastest FHE bootstrapping schemes able to compute any function over elements of a finite field alongside reducing the error.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560700](https://doi.org/10.1145/3548606.3560700)
## Low-Latency Hardware Private Circuits.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#low-latency-hardware-private-circuits)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#low-latency-hardware-private-circuits)
### Authors
* David Knichel, Ruhr University Bochum, Bochum, Germany
* Amir Moradi, University of Cologne, Cologne, Germany
### Abstract
> Over the last years, the rise of the IoT, and the connection of mobile - and hence physically accessible - devices, immensely enhanced the demand for fast and secure hardware implementations of cryptographic algorithms which offer thorough protection against SCA attacks. Among a variety of proposed countermeasures against SCA, masking has transpired to be a promising candidate, attracting significant attention in both, academia and industry. Here, abstract adversary models have been derived, aiming to accurately model real-world attack scenarios, while being sufficiently simple to enable formally proving the SCA resilience of masked implementations on an algorithmic level. In the context of hardware implementations, the robust probing model has become highly relevant for proving SCA resilience due to its capability to model physical defaults like glitches and data transitions. As constructing a correct and secure masked variant of large and complex circuits is a challenging task, a new line of research has recently emerged, aiming to design small, masked subcircuits - realizing for instance a simple AND gate - which still guarantee security when composed to a larger circuit. Although several designs realizing such composable subcircuits - commonly referred to as gadgets - have been proposed, negligible research was conducted in order to find trade-offs between different overhead metrics, like randomness requirement, latency, and area consumption. In this work, we present HPC3, a hardware gadget which is trivially composable under the notion of PINI in the glitch-extended robust probing model. HPC3 realizes a two-input AND gate in one clock cycle which is generalized for any arbitrary security order. Existing state-of-the-art PINI-gadgets either require a latency of two clock cycles or are limited to first-order security. In short, HPC3 enables the designer to trade double the randomness for half the latency compared to existing gadgets, providing high flexibility and enabling the designer to gain significantly more speed in real-time applications.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559362](https://doi.org/10.1145/3548606.3559362)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559362](https://dl.acm.org/doi/pdf/10.1145/3548606.3559362)
## LPGNet: Link Private Graph Networks for Node Classification.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#lpgnet-link-private-graph-networks-for-node-classification)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#lpgnet-link-private-graph-networks-for-node-classification)
### Authors
* Aashish Kolluri, National University of Singapore, Singapore, Singapore
* Teodora Baluta, National University of Singapore, Singapore, Singapore
* Bryan Hooi, National University of Singapore, Singapore, Singapore
* Prateek Saxena, National University of Singapore, Singapore, Singapore
### Abstract
> Classification tasks on labeled graph-structured data have many important applications ranging from social recommendation to financial modeling. Deep neural networks are increasingly being used for node classification on graphs, wherein nodes with similar features have to be given the same label. Graph convolutional networks (GCNs) are one such widely studied neural network architecture that perform well on this task. However, powerful link-stealing attacks on GCNs have recently shown that even with black-box access to the trained model, inferring which links (or edges) are present in the training graph is practical. In this paper, we present a new neural network architecture called LPGNet for training on graphs with privacy-sensitive edges. LPGNet provides differential privacy (DP) guarantees for edges using a novel design for how graph edge structure is used during training. We empirically show that LPGNet models often lie in the sweet spot between providing privacy and utility: They can offer better utility than "trivially" private architectures which use no edge information (e.g., vanilla MLPs) and better resilience against existing link-stealing attacks than vanilla GCNs which use the full edge structure. LPGNet also offers consistently better privacy-utility tradeoffs than DPGCN, which is the state-of-the-art mechanism for retrofitting differential privacy into conventional GCNs, in most of our evaluated datasets.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560705](https://doi.org/10.1145/3548606.3560705)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560705](https://dl.acm.org/doi/pdf/10.1145/3548606.3560705)
## Leakage Inversion: Towards Quantifying Privacy in Searchable Encryption.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#leakage-inversion-towards-quantifying-privacy-in-searchable-encryption)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#leakage-inversion-towards-quantifying-privacy-in-searchable-encryption)
### Authors
* Evgenios M. Kornaropoulos, George Mason University, Fairfax, VA, USA
* Nathaniel Moyer, George Mason University, Fairfax, VA, USA
* Charalampos Papamanthou, Yale University, New Hampshire, CT, USA
* Alexandros Psomas, Purdue University, West Lafayette, IN, USA
### Abstract
> Searchable encryption (SE) provides cryptographic guarantees that a user can efficiently search over encrypted data while only disclosing patterns about the data, also known as leakage. Recently, the community has developed leakage-abuse attacks that shed light on what an attacker can infer about the underlying sensitive information using the aforementioned leakage. A glaring missing piece in this effort is the absence of a systematic and rigorous method that quantifies the privacy guarantees of SE. In this work, we put forth the notion of leakage inversion that quantifies privacy in SE. Our insight is that the leakage is a function and, thus, one can define its inverse which corresponds to the collection of databases that reveal structurally equivalent patterns to the original plaintext database. We call this collection of databases the reconstruction space and we rigorously study its properties that impact the privacy of an SE scheme such as the entropy of the reconstruction space and the distance of its members from the original plaintext database. Leakage inversion allows for a foundational algorithmic analysis of the privacy offered by SE and we demonstrate this by defining closed-form expressions and lower/upper bounds on the properties of the reconstruction space for both keyword-based and range-based databases. We use leakage inversion in three scenarios: (i) we quantify the impact that auxiliary information, a typical cryptanalytic assumption, has to the overall privacy, (ii) we quantify how privacy is affected in case of restricting range schemes to respond to a limited number of queries, and (iii) we study the efficiency vs. privacy trade-off offered by proposed padding defenses. We use real-world databases in all three scenarios and we draw theoretically-grounded new insights about the interplay between leakage, attacks, defenses, and efficiency.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560593](https://doi.org/10.1145/3548606.3560593)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560593](https://dl.acm.org/doi/pdf/10.1145/3548606.3560593)
## PentaGOD: Stepping beyond Traditional GOD with Five Parties.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pentagod-stepping-beyond-traditional-god-with-five-parties)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pentagod-stepping-beyond-traditional-god-with-five-parties)
### Authors
* Nishat Koti, Indian Institute of Science, Bangalore, India
* Varsha Bhat Kukkala, Indian Institute of Science, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Bhavish Raj Gopal, Indian Institute of Science, Bangalore, India
### Abstract
> Secure multiparty computation (MPC) is increasingly being used to address privacy issues in various applications. The recent work of Alon et al. (CRYPTO'20) identified the shortcomings of traditional MPC and defined a Friends-and-Foes (FaF) security notion to address the same. We showcase the need for FaF security in real-world applications such as dark pools. This subsequently necessitates designing concretely efficient FaF-secure protocols. Towards this, keeping efficiency at the center stage, we design ring-based FaF-secure MPC protocols in the small-party honest-majority setting. Specifically, we provide (1,1)-FaF secure 5 party computation protocols (5PC) that consider one malicious and one semi-honest corruption and constitutes the optimal setting for attaining honest-majority. At the heart of it lies the multiplication protocol that requires a single round of communication with 8 ring elements (amortized). To facilitate having FaF-secure variants for several applications, we design a variety of building blocks optimized for our FaF setting. The practicality of the designed (1,1)-FaF secure 5PC framework is showcased by benchmarking dark pools. In the process, we also improve the efficiency and security of the dark pool protocols over the existing traditionally secure ones. This improvement is witnessed as a gain of up to 62x in throughput compared to the existing ones. Finally, to demonstrate the versatility of our framework, we also benchmark popular deep neural networks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559369](https://doi.org/10.1145/3548606.3559369)
## Hammurabi: A Framework for Pluggable, Logic-Based X.509 Certificate Validation Policies.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hammurabi-a-framework-for-pluggable-logic-based-x-509-certificate-validation-policies)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hammurabi-a-framework-for-pluggable-logic-based-x-509-certificate-validation-policies)
### Authors
* James Larisch, Harvard University, Cambridge, MA, USA
* Waqar Aqeel, Duke University, Durham, NC, USA
* Michael Lum, University of Maryland, College Park, MD, USA
* Yaelle Goldschlag, University of Maryland, College Park, MD, USA
* Leah Kannan, University of Maryland, College Park, MD, USA
* Kasra Torshizi, University of Maryland, College Park, MD, USA
* Yujie Wang, University of Maryland, College Park, MD, USA
* Taejoong Chung, Virginia Tech, Blacksburg, VA, USA
* Dave Levin, University of Maryland, College Park, MD, USA
* Bruce M. Maggs, Duke University & Emerald Innovations, Durham, NC, USA
* Alan Mislove, Northeastern University, Boston, MA, USA
* Bryan Parno, Carnegie Mellon University, Pittsburgh, PA, USA
* Christo Wilson, Northeastern University, Boston, MA, USA
### Abstract
> This paper proposes using a logic programming language to disentangle X.509 certificate validation policy from mechanism. Expressing validation policies in a logic programming language provides multiple benefits. First, policy and mechanism can be more independently written, augmented, and analyzed compared to the current practice of interweaving them within a C or C++ implementation. Once written, these policies can be easily shared and modified for use in different TLS clients. Further, logic programming allows us to determine when clients differ in their policies and use the power of imputation to automatically generate interesting certificates, e.g., a certificate that will be accepted by one browser but not by another. We present a new framework called Hammurabi for expressing validation policies, and we demonstrate that we can express the complex policies of the Google Chrome and Mozilla Firefox web browsers in this framework. We confirm the fidelity of the Hammurabi policies by comparing the validation decisions they make with those made by the browsers themselves on over ten million certificate chains derived from Certificate Transparency logs, as well as 100K synthetic chains. We also use imputation to discover nine validation differences between the two browsers' policies. Finally, we demonstrate the feasibility of integrating Hammurabi into Firefox and the Go language in less than 100 lines of code each.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560594](https://doi.org/10.1145/3548606.3560594)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560594](https://dl.acm.org/doi/pdf/10.1145/3548606.3560594)
## Cerberus: A Formal Approach to Secure and Efficient Enclave Memory Sharing.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cerberus-a-formal-approach-to-secure-and-efficient-enclave-memory-sharing)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cerberus-a-formal-approach-to-secure-and-efficient-enclave-memory-sharing)
### Authors
* Dayeol Lee, University of California, Berkeley, Berkeley, CA, USA
* Kevin Cheang, University of California, Berkeley, Berkeley, CA, USA
* Alexander Thomas, University of California, Berkeley, Berkeley, CA, USA
* Catherine Lu, University of California, Berkeley, Berkeley, CA, USA
* Pranav Gaddamadugu, University of California, Berkeley, Berkeley, CA, USA
* Anjo Vahldiek-Oberwagner, Intel Labs, Hillsboro, OR, USA
* Mona Vij, Intel Labs, Hillsboro, OR, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
* Sanjit A. Seshia, University of California, Berkeley, Berkeley, CA, USA
* Krste Asanovic, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> Hardware enclaves rely on a disjoint memory model, which maps each physical address to an enclave to achieve strong memory isolation. However, this severely limits the performance and programmability of enclave programs. While some prior work proposes enclave memory sharing, it does not provide a formal model or verification of their designs. This paper presents Cerberus, a formal approach to secure and efficient enclave memory sharing. To reduce the burden of formal verification, we compare different sharing models and choose a simple yet powerful sharing model. Based on the sharing model, Cerberus extends an enclave platform such that enclave memory can be made immutable and shareable across multiple enclaves via additional operations. We use incremental verification starting with an existing formal model called the Trusted Abstract Platform (TAP). Using our extended TAP model, we formally verify that Cerberus does not break or weaken the security guarantees of the enclaves despite allowing memory sharing. More specifically, we prove the Secure Remote Execution (SRE) property on our formal model. Finally, the paper shows the feasibility of Cerberus by implementing it in an existing enclave platform, RISC-V Keystone.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560595](https://doi.org/10.1145/3548606.3560595)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560595](https://dl.acm.org/doi/pdf/10.1145/3548606.3560595)
## Collect Responsibly But Deliver Arbitrarily?: A Study on Cross-User Privacy Leakage in Mobile Apps.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#collect-responsibly-but-deliver-arbitrarily-a-study-on-cross-user-privacy-leakage-in-mobile-apps)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#collect-responsibly-but-deliver-arbitrarily-a-study-on-cross-user-privacy-leakage-in-mobile-apps)
### Authors
* Shuai Li, Fudan University, Shanghai, China
* Zhemin Yang, Fudan University, Shanghai, China
* Nan Hua, Fudan University, Shanghai, China
* Peng Liu, The Pennsylvania State University, Pennsylvania, PA, USA
* Xiaohan Zhang, Fudan University, Shanghai, China
* Guangliang Yang, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### Abstract
> Recent years have witnessed the interesting trend that modern mobile apps perform more and more likely as user-to-user platforms, where app users can be freely and conveniently connected. Upon these platforms, rich and diverse data is often delivered across users, which brings users great conveniences and plentiful services, but also introduces privacy security concerns. While prior work has primarily studied illegitimate personal data collection problems in mobile apps, few paid little attention to the security of this emerging user-to-user platform feature, thus providing a rather limited understanding of the privacy risks in this aspect. In this paper, we focus on the security of the user-to-user platform feature and shed light on its caused insufficiently-studied but critical privacy risk, which is brought forward by cross-user personal data over-delivery (denoted as XPO). For the first time, this paper reveals the landscape of such XPO risk in wild, along with prevalence and severity assessment. To achieve this, we design a novel automated risk detection framework, named XPOChecker, that leverages the advantages of machine learning and program analysis to extensively and precisely identify potential privacy risks during user-to-user connections, and regulate whether the delivered data is legitimate or not. By applying XPOChecker on 13,820 real-world popular Android apps, we find that XPO is prevalent in practice, with 1,902 apps (13.76%) being affected. In addition to the mere exposure of diverse private user data which causes serious and broad privacy infringement, we demonstrate that the XPO exploits can invalidate privacy preservation mechanisms, leak business secrets, and even restore the sensitive membership of victims which potentially poses personal safety threats. Furthermore, we also confirm the existence of XPO risks in iOS apps for the first time. Last, to help understand and prevent XPO, we have responsibly launched two notification campaigns to inform the developers of the affected apps, with the conclusion of five underlying lessons from developers' feedback. We hope our work can make up for the deficiency of the understandings of XPO, help developers avoid XPO, and motivate further researches.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559371](https://doi.org/10.1145/3548606.3559371)
## Hidden in Plain Sight: Exploring Encrypted Channels in Android Apps.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hidden-in-plain-sight-exploring-encrypted-channels-in-android-apps)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#hidden-in-plain-sight-exploring-encrypted-channels-in-android-apps)
### Authors
* Sajjad Pourali, Concordia University, Montreal, PQ, Canada
* Nayanamana Samarasinghe, Concordia University, Montreal, PQ, Canada
* Mohammad Mannan, Concordia University, Montreal, PQ, Canada
### Abstract
> As privacy features in Android operating system improve, privacy-invasive apps may gradually shift their focus to non-standard and covert channels for leaking private user/device information. Such leaks also remain largely undetected by state-of-the-art privacy analysis tools, which are very effective in uncovering privacy exposures via regular HTTP and HTTPS channels. In this study, we design and implement, ThirdEye, to significantly extend the visibility of current privacy analysis tools, in terms of the exposures that happen across various non-standard and covert channels, i.e., via any protocol over TCP/UDP (beyond HTTP/S), and using multi-layer custom encryption over HTTP/S and non-HTTP protocols. Besides network exposures, we also consider covert channels via storage media that also leverage custom encryption layers. Using ThirdEye, we analyzed 12,598 top-apps in various categories from Androidrank, and found that 2887/12,598 (22.92%) apps used custom encryption/decryption for network transmission and storing content in shared device storage, and 2465/2887 (85.38%) of those apps sent device information (e.g., advertising ID, list of installed apps) over the network that can fingerprint users. Besides, 299 apps transmitted insecure encrypted content over HTTP/non-HTTP protocols; 22 apps that used authentication tokens over HTTPS, happen to expose them over insecure (albeit custom encrypted) HTTP/non-HTTP channels. We found non-standard and covert channels with multiple levels of obfuscation (e.g., encrypted data over HTTPS, encryption at nested levels), and the use of vulnerable keys and cryptographic algorithms. Our findings can provide valuable insights into the evolving field of non-standard and covert channels, and help spur new countermeasures against such privacy leakage and security issues.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560665](https://doi.org/10.1145/3548606.3560665)
## Cerberus: Query-driven Scalable Vulnerability Detection in OAuth Service Provider Implementations.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cerberus-query-driven-scalable-vulnerability-detection-in-oauth-service-provider-implementations)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cerberus-query-driven-scalable-vulnerability-detection-in-oauth-service-provider-implementations)
### Authors
* Tamjid Al Rahat, University of California, Los Angeles, Los Angeles, CA, USA
* Yu Feng, University of California, Santa Barbara, Santa Barbara, CA, USA
* Yuan Tian, University of California, Los Angeles, Los Angeles, CA, USA
### Abstract
> OAuth protocols have been widely adopted to simplify user authentication and service authorization for third-party applications. However, little effort has been devoted to automatically checking the security of the libraries that service providers widely use. In this paper, we formalize the OAuth specifications and security best practices, and design Cerberus, an automated static analyzer, to find logical flaws and identify vulnerabilities in the implementation of OAuth service provider libraries. To efficiently detect security violations in a large codebase of service provider implementation, Cerberus employs a query-driven algorithm for answering queries about OAuth specifications. We demonstrate the effectiveness of Cerberus by evaluating it on datasets of popular OAuth libraries with millions of downloads. Among these high-profile libraries, Cerberus has identified 47 vulnerabilities from ten classes of logical flaws, 24 of which were previously unknown. We got acknowledged by the developers of eight libraries and had three accepted CVEs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559381](https://doi.org/10.1145/3548606.3559381)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559381](https://dl.acm.org/doi/pdf/10.1145/3548606.3559381)
## TickTock: Detecting Microphone Status in Laptops Leveraging Electromagnetic Leakage of Clock Signals.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ticktock-detecting-microphone-status-in-laptops-leveraging-electromagnetic-leakage-of-clock-signals)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ticktock-detecting-microphone-status-in-laptops-leveraging-electromagnetic-leakage-of-clock-signals)
### Authors
* Soundarya Ramesh, National University of Singapore, Singapore, Singapore
* Ghozali Suhariyanto Hadi, National University of Singapore, Singapore, Singapore
* Sihun Yang, Yonsei University, Seoul, Republic of Korea
* Mun Choon Chan, National University of Singapore, Singapore, Singapore
* Jun Han, Yonsei University, Seoul, Republic of Korea
### Abstract
> We are witnessing a heightened surge in remote privacy attacks on laptop computers. These attacks often exploit malware to remotely gain access to webcams and microphones in order to spy on the victim users. While webcam attacks are somewhat defended with widely available commercial webcam privacy covers, unfortunately, there are no adequate solutions to thwart the attacks on mics despite recent industry efforts. As a first step towards defending against such attacks on laptop mics, we propose TickTock, a novel mic on/off status detection system. To achieve this, TickTock externally probes the electromagnetic (EM) emanations that stem from the connectors and cables of the laptop circuitry carrying mic clock signals. This is possible because the mic clock signals are only input during the mic recording state, causing resulting emanations. We design and implement a proof-of-concept system to demonstrate TickTock's feasibility. Furthermore, we comprehensively evaluate TickTock on a total of 30 popular laptops executing a variety of applications to successfully detect mic status in 27 laptops. Of these, TickTock consistently identifies mic recording with high true positive and negative rates.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560698](https://doi.org/10.1145/3548606.3560698)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560698](https://dl.acm.org/doi/pdf/10.1145/3548606.3560698)
## FABEO: Fast Attribute-Based Encryption with Optimal Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fabeo-fast-attribute-based-encryption-with-optimal-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fabeo-fast-attribute-based-encryption-with-optimal-security)
### Authors
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
### Abstract
> Attribute-based encryption (ABE) enables fine-grained access control on encrypted data and has a large number of practical applications. This paper presents FABEO: faster pairing-based ciphertext-policy and key-policy ABE schemes that support expressive policies and put no restriction on policy type or attributes, and the first to achieve optimal, adaptive security with multiple challenge ciphertexts. We implement our schemes and demonstrate that they perform better than the state-of-the-art (Bethencourt et al. S&P 2007, Agrawal et al., CCS 2017 and Ambrona et al., CCS 2017) on all parameters of practical interest.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560699](https://doi.org/10.1145/3548606.3560699)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560699](https://dl.acm.org/doi/pdf/10.1145/3548606.3560699)
## Blazing Fast PSI from Improved OKVS and Subfield VOLE.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#blazing-fast-psi-from-improved-okvs-and-subfield-vole)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#blazing-fast-psi-from-improved-okvs-and-subfield-vole)
### Authors
* Srinivasan Raghuraman, Visa Research, Palo Alto, CA, USA
* Peter Rindal, Visa Research, Palo Alto, CA, USA
### Abstract
> We present new semi-honest and malicious secure PSI protocols that outperform all prior works by several times in both communication and running time. Our semi-honest protocol for n = 2^20 can be performed in 0.37 seconds compared to the previous best of 2 seconds (Kolesnikov et al., CCS 2016). This can be further reduced to 0.16 seconds with 4 threads. Similarly, our protocol sends 187n bits compared to 426n bits of the next most communication-efficient protocol (Rindal et al., Eurocrypt 2021). Additionally, we apply our new techniques to the circuit PSI protocol of Rindal et al. and observe a 6x improvement in running time. These performance results are obtained by two types of improvements.   The first is an optimization to the protocol of Rindal et al. to utilize sub-field vector oblivious linear evaluation. This optimization allows our construction to be the first to achieve a communication complexity of O(n lambda + n log n) where lambda is the statistical security parameter. In particular, the communication overhead of our protocol does not scale with the computational security parameter times n.   Our second improvement is to the OKVS data structure which our protocol crucially relies on. In particular, our construction improves both the computation and communication efficiency as compared to prior work (Garimella et al., Crypto 2021). These improvements stem from algorithmic changes to the data structure along with new techniques for obtaining both asymptotic and tight concrete bounds on its failure probability.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560658](https://doi.org/10.1145/3548606.3560658)
## Strengthening Order Preserving Encryption with Differential Privacy.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#strengthening-order-preserving-encryption-with-differential-privacy)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#strengthening-order-preserving-encryption-with-differential-privacy)
### Authors
* Amrita Roy Chowdhury, University of Wisconsin-Madison, Madison, WI, USA
* Bolin Ding, Alibaba Group, Seattle, WA, USA
* Somesh Jha, University of Wisconsin-Madison, Madison, WI, USA
* Weiran Liu, Alibaba Group, Beijing, China
* Jingren Zhou, Alibaba Group, Seattle, WA, USA
### Abstract
> Ciphertexts of an order-preserving encryption (OPE) scheme preserve the order of their corresponding plaintexts. However, OPEs are vulnerable to inference attacks that exploit this preserved order. Differential privacy (DP) has become the de-facto standard for data privacy. One of the most attractive properties of DP is that any post-processing computation, such as inference attacks, performed on the noisy output of a DP algorithm does not degrade its privacy guarantee. In this work, we propose a novel differentially private order preserving encryption scheme, OP ε. Under OP ε, the leakage of order from the ciphertexts is differentially private. Consequently, in the least, OP ε ensures a formal guarantee (a relaxed DP guarantee) even in the face of inference attacks. To the best of our knowledge, this is the first work to combine DP with a OPE. OP ε is based on a novel differentially private order preserving encoding scheme, OPεc, that can be of independent interest in the local DP setting. We demonstrate OP ε's utility in answering range queries via empirical evaluation on four real-world datasets. For instance, OP ε misses only around 4 in every 10K correct records on average for a dataset of size ~732K with an attribute of domain size ~18K and ε= 1.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560610](https://doi.org/10.1145/3548606.3560610)
## EIFFeL: Ensuring Integrity for Federated Learning.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#eiffel-ensuring-integrity-for-federated-learning)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#eiffel-ensuring-integrity-for-federated-learning)
### Authors
* Amrita Roy Chowdhury, University of Wsiconsin-Madison, Madison, WI, USA
* Chuan Guo, Meta AI, Menlo Park, CA, USA
* Somesh Jha, University of Wisconsin-Madison, Madison, WI, USA
* Laurens van der Maaten, Meta AI, New York City, NY, USA
### Abstract
> Federated learning (FL) enables clients to collaborate with a server to train a machine learning model. To ensure privacy, the server performs secure aggregation of updates from the clients. Unfortunately, this prevents verification of the well-formedness (integrity) of the updates as the updates are masked. Consequently, malformed updates designed to poison the model can be injected without detection. In this paper, we formalize the problem of ensuring both update privacy and integrity in FL and present a new system, EIFFeL, that enables secure aggregation of verified updates. EIFFeL is a general framework that can enforce arbitrary integrity checks and remove malformed updates from the aggregate, without violating privacy. Our empirical evaluation demonstrates the practicality of EIFFeL. For instance, with 100 clients and 10% poisoning, EIFFeL can train an MNIST classification model to the same accuracy as that of a non-poisoned federated learner in just 2.4s per iteration.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560611](https://doi.org/10.1145/3548606.3560611)
## ROAST: Robust Asynchronous Schnorr Threshold Signatures.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#roast-robust-asynchronous-schnorr-threshold-signatures)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#roast-robust-asynchronous-schnorr-threshold-signatures)
### Authors
* Tim Ruffing, Blockstream, Victoria, BC, Canada
* Viktoria Ronge, Friedrich-Alexander-Universität Erlangen-Nürnberg, Nürnberg, Germany
* Elliott Jin, Blockstream, Victoria, BC, Canada
* Jonas Schneider-Bensch, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Dominique Schröder, Friedrich-Alexander-Universität Erlangen-Nürnberg, Nürnberg, Germany
### Abstract
> Bitcoin and other cryptocurrencies have recently introduced support for Schnorr signatures whose cleaner algebraic structure, as compared to ECDSA, allows for simpler and more practical constructions of highly demanded ''t-of-n'' threshold signatures. However, existing Schnorr threshold signature schemes still fall short of the needs of real-world applications due to their assumption that the network is synchronous and due to their lack of robustness, i.e., the guarantee that t honest signers are able to obtain a valid signature even in the presence of other malicious signers who try to disrupt the protocol. This hinders the adoption of threshold signatures in the cryptocurrency ecosystem, e.g., in second-layer protocols built on top of cryptocurrencies. In this work, we propose ROAST, a simple wrapper that turns a given threshold signature scheme into a scheme with a robust and asynchronous signing protocol, as long as the underlying signing protocol is semi-interactive (i.e., has one preprocessing round and one actual signing round), provides identifiable aborts, and is unforgeable under concurrent signing sessions. When applied to the state-of-the-art Schnorr threshold signature scheme FROST, which fulfills these requirements, we obtain a simple, efficient, and highly practical Schnorr threshold signature scheme.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560583](https://doi.org/10.1145/3548606.3560583)
## Fast Fully Oblivious Compaction and Shuffling.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fast-fully-oblivious-compaction-and-shuffling)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#fast-fully-oblivious-compaction-and-shuffling)
### Authors
* Sajin Sasy, University of Waterloo, Waterloo, ON, Canada
* Aaron Johnson, U.S. Naval Research Laboratory, Washington, DC, USA
* Ian Goldberg, University of Waterloo, Waterloo, ON, Canada
### Abstract
> Several privacy-preserving analytics frameworks have been proposed that use trusted execution environments (TEEs) like Intel SGX. Such frameworks often use compaction and shuffling as core primitives. However, due to advances in TEE side-channel attacks, these primitives, and the applications that use them, should be fully oblivious; that is, perform instruction sequences and memory accesses that do not depend on the secret inputs. Such obliviousness would eliminate the threat of leaking private information through memory or timing side channels, but achieving it naively can result in a significant performance cost. In this work, we present fast, fully oblivious algorithms for compaction and shuffling. We implement and evaluate our designs to show that they are practical and outperform the state of the art. Our oblivious compaction algorithm, ORCompact, is always faster than the best alternative and can yield up to a 5× performance improvement. For oblivious shuffling, we provide two novel algorithms: ORCompact and BORPStream. ORCompact outperforms prior fully oblivious shuffles in all experiments, and it provides the largest speed increases-up to 1.8×-when shuffling a large number of small items. BORPStream outperforms all other algorithms when shuffling a large number of large items, with a speedup of up to 1.4× in such cases. It can obtain even larger performance improvements in application settings where the items to shuffle arrive incrementally over time, obtaining a speedup of as much as 4.2×. We additionally give parallel versions of all of our algorithms, prove that they have low parallel step complexity, and experimentally show a 5-6× speedup on an 8-core processor. Finally, ours is the first work with the explicit goal of ensuring full obliviousness of complex functionalities down to the implementation level. To this end, we design Fully Oblivious Assembly Verifier (FOAV), a tool that verifies the binary has no secret-dependent conditional branches.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560603](https://doi.org/10.1145/3548606.3560603)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560603](https://dl.acm.org/doi/pdf/10.1145/3548606.3560603)
## FeIDo: Recoverable FIDO2 Tokens Using Electronic IDs.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#feido-recoverable-fido2-tokens-using-electronic-ids)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#feido-recoverable-fido2-tokens-using-electronic-ids)
### Authors
* Fabian Schwarz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Khue Do, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Gunnar Heide, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Christian Rossow, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Two-factor authentication (2FA) mitigates the security risks of passwords as sole authentication factor. FIDO2---the de facto standard for interoperable web authentication---leverages strong, hardware-backed second factors. However, practical challenges hinder wider FIDO2 user adoption for 2FA tokens, such as the extra costs (20-30 per token) or the risk of inaccessible accounts upon token loss/theft. To tackle the above challenges, we propose FeIDo, a virtual FIDO2 token that combines the security and interoperability of FIDO2 2FA authentication with the prevalence of existing eIDs (e.g., electronic passports). Our core idea is to derive FIDO2 credentials based on personally-identifying and verifiable attributes---name, date of birth, and place of birth---that we obtain from the user's eID. As these attributes do not change even for refreshed eID documents, the credentials "survive" token loss. Even though FeIDo operates on privacy-critical data, all personal data and resulting FIDO2 credentials stay unlinkable, are never leaked to third parties, and are securely managed in attestable hardware containers (e.g., SGX enclaves). In contrast to existing FIDO2 tokens, FeIDo can also derive and share verifiable meta attributes (anonymous credentials) with web services. These enable verified but pseudonymous user checks, e.g., for age verification (e.g., "is adult").

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560584](https://doi.org/10.1145/3548606.3560584)
## MC2: Rigorous and Efficient Directed Greybox Fuzzing.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#mc2-rigorous-and-efficient-directed-greybox-fuzzing)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#mc2-rigorous-and-efficient-directed-greybox-fuzzing)
### Authors
* Abhishek Shah, Columbia University, New York, NY, USA
* Dongdong She, Columbia University, New York, NY, USA
* Samanway Sadhu, Columbia University, New York, NY, USA
* Krish Singal, Columbia University, New York, NY, USA
* Peter Coffman, Columbia University, New York, NY, USA
* Suman Jana, Columbia University, New York, NY, USA
### Abstract
> Directed greybox fuzzing is a popular technique for targeted software testing that seeks to find inputs that reach a set of target sites in a program. Most existing directed greybox fuzzers do not provide any theoretical analysis of their performance or optimality. In this paper, we introduce a complexity-theoretic framework to pose directed greybox fuzzing as an oracle-guided search problem where some feedback about the input space (e.g., how close an input is to the target sites) is received by querying an oracle. Our framework assumes that each oracle query can return arbitrary content with a large but constant amount of information. Therefore, we use the number of oracle queries required by a fuzzing algorithm to find a target-reaching input as the performance metric. Using our framework, we design a randomized directed greybox fuzzing algorithm that makes a logarithmic (wrt. the number of all possible inputs) number of queries in expectation to find a target-reaching input. We further prove that the number of oracle queries required by our algorithm is optimal, i.e., no fuzzing algorithm can improve (i.e., minimize) the query count by more than a constant factor. We implement our approach in MC^2 and outperform state-of-the-art directed greybox fuzzers on challenging benchmarks (Magma and Fuzzer Test Suite) by up to two orders of magnitude (i.e., 134\times) on average. MC^2 also found 15 previously undiscovered bugs that other state-of-the-art directed greybox fuzzers failed to find.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560648](https://doi.org/10.1145/3548606.3560648)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560648](https://dl.acm.org/doi/pdf/10.1145/3548606.3560648)
## Post-breach Recovery: Protection against White-box Adversarial Examples for Leaked DNN Models.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#post-breach-recovery-protection-against-white-box-adversarial-examples-for-leaked-dnn-models)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#post-breach-recovery-protection-against-white-box-adversarial-examples-for-leaked-dnn-models)
### Authors
* Shawn Shan, University of Chicago, Chicago, IL, USA
* Wenxin Ding, University of Chicago, Chicago, IL, USA
* Emily Wenger, University of Chicago, Chicago, IL, USA
* Haitao Zheng, University of Chicago, Chicago, IL, USA
* Ben Y. Zhao, University of Chicago, Chicago, IL, USA
### Abstract
> Server breaches are an unfortunate reality on today's Internet. In the context of deep neural network (DNN) models, they are particularly harmful, because a leaked model gives an attacker "white-box'' access to generate adversarial examples, a threat model that has no practical robust defenses. For practitioners who have invested years and millions into proprietary DNNs, e.g. medical imaging, this seems like an inevitable disaster looming on the horizon. In this paper, we consider the problem of post-breach recovery for DNN models. We propose Neo, a new system that creates new versions of leaked models, alongside an inference time filter that detects and removes adversarial examples generated on previously leaked models. The classification surfaces of different model versions are slightly offset (by introducing hidden distributions), and Neo detects the overfitting of attacks to the leaked model used in its generation. We show that across a variety of tasks and attack methods, Neo is able to filter out attacks from leaked models with very high accuracy, and provides strong protection (7--10 recoveries) against attackers who repeatedly breach the server. Neo performs well against a variety of strong adaptive attacks, dropping slightly in # of breaches recoverable, and demonstrates potential as a complement to DNN defenses in the wild.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560561](https://doi.org/10.1145/3548606.3560561)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560561](https://dl.acm.org/doi/pdf/10.1145/3548606.3560561)
## Gringotts: Fast and Accurate Internal Denial-of-Wallet Detection for Serverless Computing.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#gringotts-fast-and-accurate-internal-denial-of-wallet-detection-for-serverless-computing)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#gringotts-fast-and-accurate-internal-denial-of-wallet-detection-for-serverless-computing)
### Authors
* Junxian Shen, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Han Zhang, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Yantao Geng, Tsinghua University & Zhongguancun Laboratory, Beijing, China
* Jiawei Li, Tsinghua University, Beijing, China
* Jilong Wang, Tsinghua University, Zhongguancun Laboratory, & Peng Cheng Laboratory, Beijing, China
* Mingwei Xu, Tsinghua University, Zhongguancun Laboratory, & Peng Cheng Laboratory, Beijing, China
### Abstract
> Serverless computing, or Function-as-a-Service, is gaining continuous popularity due to its pay-as-you-go billing model, flexibility, and low costs. These characteristics, however, bring additional security risks, such as the Denial-of-Wallet (DoW) attack, to serverless tenants. In this paper, we perform a real-world DoW attack on commodity serverless platforms to evaluate its severity. To identify such attacks, we design, implement, and evaluate Gringotts, an accurate, easy-to-use DoW detection system with a negligible performance overhead. Gringotts addresses the information ambiguity inherent in serverless functions by introducing a well-designed performance metrics collection agent. Then, Gringotts uses the Mahalanobis distance to discover anomalies in the distribution of the metrics. We implement Gringotts as a real system and conduct extensive experiments using a testbed to evaluate the performance of Gringotts. Our results indicate that Gringotts has a performance overhead of less than 1.1%, with an average detection delay of 1.86 seconds and an average accuracy of over 95.75%.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560629](https://doi.org/10.1145/3548606.3560629)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560629](https://dl.acm.org/doi/pdf/10.1145/3548606.3560629)
## Finding MNEMON: Reviving Memories of Node Embeddings.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#finding-mnemon-reviving-memories-of-node-embeddings)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#finding-mnemon-reviving-memories-of-node-embeddings)
### Authors
* Yun Shen, NetApp, Bristol, United Kingdom
* Yufei Han, Inria, Rennes, France
* Zhikun Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Min Chen, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ting Yu, Qatar Computing Research Institute, Doha, Qatar
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Gianluca Stringhini, Boston University, Boston, MA, USA
### Abstract
> Previous security research efforts orbiting around graphs have been exclusively focusing on either (de-)anonymizing the graphs or understanding the security and privacy issues of graph neural networks. Little attention has been paid to understand the privacy risks of integrating the output from graph embedding models (e.g., node embeddings) with complex downstream machine learning pipelines. In this paper, we fill this gap and propose a novel model-agnostic graph recovery attack that exploits the implicit graph structural information preserved in the embeddings of graph nodes. We show that an adversary can recover edges with decent accuracy by only gaining access to the node embedding matrix of the original graph without interactions with the node embedding models. We demonstrate the effectiveness and applicability of our graph recovery attack through extensive experiments.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559358](https://doi.org/10.1145/3548606.3559358)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559358](https://dl.acm.org/doi/pdf/10.1145/3548606.3559358)
## Why So Toxic?: Measuring and Triggering Toxic Behavior in Open-Domain Chatbots.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#why-so-toxic-measuring-and-triggering-toxic-behavior-in-open-domain-chatbots)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#why-so-toxic-measuring-and-triggering-toxic-behavior-in-open-domain-chatbots)
### Authors
* Wai Man Si, CISPA Helmholtz Center for Information Security, Saarbruceken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbruceken, Germany
* Jeremy Blackburn, Binghamton University, Binghamton, NY, USA
* Emiliano De Cristofaro, University College London, London, United Kingdom
* Gianluca Stringhini, Boston University, Boston, MA, USA
* Savvas Zannettou, TU Delft, Delft, Netherlands
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbruceken, Germany
### Abstract
> Chatbots are used in many applications, e.g., automated agents, smart home assistants, interactive characters in online games, etc. Therefore, it is crucial to ensure they do not behave in undesired manners, providing offensive or toxic responses to users. This is not a trivial task as state-of-the-art chatbot models are trained on large, public datasets openly collected from the Internet. This paper presents a first-of-its-kind, large-scale measurement of toxicity in chatbots. We show that publicly available chatbots are prone to providing toxic responses when fed toxic queries. Even more worryingly, some non-toxic queries can trigger toxic responses too. We then set out to design and experiment with an attack, ToxicBuddy, which relies on fine-tuning GPT-2 to generate non-toxic queries that make chatbots respond in a toxic manner. Our extensive experimental evaluation demonstrates that our attack is effective against public chatbot models and outperforms manually-crafted malicious queries proposed by previous work. We also evaluate three defense mechanisms against ToxicBuddy, showing that they either reduce the attack performance at the cost of affecting the chatbot's utility or are only effective at mitigating a portion of the attack. This highlights the need for more research from the computer security and online safety communities to ensure that chatbot models do not hurt their users. Overall, we are confident that ToxicBuddy can be used as an auditing tool and that our work will pave the way toward designing more effective defenses for chatbot safety.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560599](https://doi.org/10.1145/3548606.3560599)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560599](https://dl.acm.org/doi/pdf/10.1145/3548606.3560599)
## Escaping the Confines of Time: Continuous Browser Extension Fingerprinting Through Ephemeral Modifications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#escaping-the-confines-of-time-continuous-browser-extension-fingerprinting-through-ephemeral-modifications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#escaping-the-confines-of-time-continuous-browser-extension-fingerprinting-through-ephemeral-modifications)
### Authors
* Konstantinos Solomos, University of Illinois at Chicago, Chicago, IL, USA
* Panagiotis Ilia, University of Illinois at Chicago, Chicago, IL, USA
* Nick Nikiforakis, Stony Brook University, New York, NY, USA
* Jason Polakis, University of Illinois at Chicago, Chicago, IL, USA
### Abstract
> Browser fingerprinting continues to proliferate across the web. Critically, popular fingerprinting libraries have started incorporating extension-fingerprinting capabilities, thus exacerbating the privacy loss they can induce. In this paper we propose continuous fingerprinting, a novel extension fingerprinting technique that captures a critical dimension of extensions' functionality that allowed them to elude all prior behavior-based techniques. Specifically, we find that ephemeral modifications are prevalent in the extension ecosystem, effectively rendering such extensions invisible to prior approaches that are confined to analyzing snapshots that capture a single moment in time. Accordingly, we develop Chronos, a system that captures the modifications that occur throughout an extension's life cycle, enabling it to fingerprint extensions that make transient modifications that leave no visible traces at the end of execution. Specifically, our system creates behavioral signatures that capture nodes being added to or removed from the DOM, as well as changes being made to node attributes. Our extensive experimental evaluation highlights the inherent limits of prior snapshot-based approaches, as Chronos is able to identify 11,219 unique extensions, increasing coverage by 66.9% over the state of the art. Additionally, we find that our system captures a unique modification event (i.e., mutation) for 94% of the extensions, while also being able to resolve 97% of the signature collisions across extensions that affect existing snapshot-based approaches. Our study more accurately captures the extent of the privacy threat presented by extension fingerprinting, which warrants more attention by privacy-oriented browser vendors that, up to this point, have focused on deploying countermeasures against other browser fingerprinting vectors.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560576](https://doi.org/10.1145/3548606.3560576)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560576](https://dl.acm.org/doi/pdf/10.1145/3548606.3560576)
## pMPL: A Robust Multi-Party Learning Framework with a Privileged Party.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pmpl-a-robust-multi-party-learning-framework-with-a-privileged-party)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pmpl-a-robust-multi-party-learning-framework-with-a-privileged-party)
### Authors
* Lushan Song, Fudan University, Shanghai, China
* Jiaxuan Wang, Fudan University, Shanghai, China
* Zhexuan Wang, Fudan University, Shanghai, China
* Xinyu Tu, Fudan University, Shanghai, China
* Guopeng Lin, Fudan University, Shanghai, China
* Wenqiang Ruan, Fudan University, Shanghai, China
* Haoqi Wu, Fudan University, Shanghai, China
* Weili Han, Fudan University, Shanghai, China
### Abstract
> In order to perform machine learning among multiple parties while protecting the privacy of raw data, privacy-preserving machine learning based on secure multi-party computation (MPL for short) has been a hot spot in recent. The configuration of MPL usually follows the peer-to-peer architecture, where each party has the same chance to reveal the output result. However, typical business scenarios often follow a hierarchical architecture where a powerful, usuallyprivileged party, leads the tasks of machine learning. Only theprivileged party can reveal the final model even if otherassistant parties collude with each other. It is even required to avoid the abort of machine learning to ensure the scheduled deadlines and/or save used computing resources when part ofassistant parties drop out.   Motivated by the above scenarios, we propose \pmpl, a robust MPL framework with aprivileged party. \pmpl supports three-party (a typical number of parties in MPL frameworks) training in the semi-honest setting. By setting alternate shares for theprivileged party, \pmpl is robust to tolerate one of the rest two parties dropping out during the training. With the above settings, we design a series of efficient protocols based on vector space secret sharing for \pmpl to bridge the gap between vector space secret sharing and machine learning. Finally, the experimental results show that the performance of \pmpl is promising when we compare it with the state-of-the-art MPL frameworks. Especially, in the LAN setting, \pmpl is around 16× and 5× faster than \textttTF-encrypted (with \textttABY3 as the back-end framework) for the linear regression, and logistic regression, respectively. Besides, the accuracy of trained models of linear regression, logistic regression, and BP neural networks can reach around 97%, 99%, and 96% on MNIST dataset respectively.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560697](https://doi.org/10.1145/3548606.3560697)
## Bullshark: DAG BFT Protocols Made Practical.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#bullshark-dag-bft-protocols-made-practical)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#bullshark-dag-bft-protocols-made-practical)
### Authors
* Alexander Spiegelman, Aptos, Palo Alto, CA, USA
* Neil Giridharan, University of California, Berkeley, Berkeley , CA, USA
* Alberto Sonnino, Mysten Labs, New York, NY, USA
* Lefteris Kokoris-Kogias, IST Austria, Vienna, Austria
### Abstract
> We present Bullshark, the first directed acyclic graph (DAG) based asynchronous Byzantine Atomic Broadcast protocol that is optimized for the common synchronous case. Like previous DAG-based BFT protocols [19, 25], Bullshark requires no extra communication to achieve consensus on top of building the DAG. That is, parties can totally order the vertices of the DAG by interpreting their local view of the DAG edges. Unlike other asynchronous DAG-based protocols, Bullshark provides a practical low latency fast-path that exploits synchronous periods and deprecates the need for notoriously complex view-change and view-synchronization mechanisms. Bullshark achieves this while maintaining all the desired properties of its predecessor DAG-Rider [25]. Namely, it has optimal amortized communication complexity, it provides fairness and asynchronous liveness, and safety is guaranteed even under a quantum adversary. In order to show the practicality and simplicity of our approach, we also introduce a standalone partially synchronous version of Bullshark, which we evaluate against the state of the art. The implemented protocol is embarrassingly simple (200 LOC on top of an existing DAG-based mempool implementation). It is highly efficient, achieving for example, 125,000 transactions per second with a 2 seconds latency for a deployment of 50 parties. In the same setting, the state of the art pays a steep 50% latency increase as it optimizes for asynchrony.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559361](https://doi.org/10.1145/3548606.3559361)
## Batching, Aggregation, and Zero-Knowledge Proofs in Bilinear Accumulators.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#batching-aggregation-and-zero-knowledge-proofs-in-bilinear-accumulators)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#batching-aggregation-and-zero-knowledge-proofs-in-bilinear-accumulators)
### Authors
* Shravan Srinivasan, University of Maryland, College Park, MD, USA
* Ioanna Karantaidou, George Mason University, Fairfax, VA, USA
* Foteini Baldimtsi, George Mason University, Fairfax, VA, USA
* Charalampos Papamanthou, Yale University, New Haven, CT, USA
### Abstract
> An accumulator is a cryptographic primitive that allows a prover to succinctly commit to a set of values while being able to provide proofs of (non-)membership. A batch proof is an accumulator proof that can be used to prove (non-)membership of multiple values simultaneously.   In this work, we present a zero-knowledge batch proof with constant proof size and constant verification in the Bilinear Pairings (BP) setting. Our scheme is 16x to 42x faster than state-of-the-art SNARK-based zero-knowledge batch proofs in the RSA setting. Additionally, we propose protocols that allow a prover to aggregate multiple individual non-membership proofs, in the BP setting, into a single batch proof of constant size. Our construction for aggregation satisfies a strong soundness definition - one where the accumulator value can be chosen arbitrarily.   We evaluate our techniques and systematically compare them with RSA-based alternatives. Our evaluation results showcase several scenarios for which BP accumulators are clearly preferable and can serve as a guideline when choosing between the two types of accumulators.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560676](https://doi.org/10.1145/3548606.3560676)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560676](https://dl.acm.org/doi/pdf/10.1145/3548606.3560676)
## Zapper: Smart Contracts with Data and Identity Privacy.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#zapper-smart-contracts-with-data-and-identity-privacy)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#zapper-smart-contracts-with-data-and-identity-privacy)
### Authors
* Samuel Steffen, ETH Zurich, Zurich, Switzerland
* Benjamin Bichsel, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### Abstract
> Privacy concerns prevent the adoption of smart contracts in sensitive domains incompatible with the public nature of shared ledgers. We present Zapper, a privacy-focused smart contract system allowing developers to express contracts in an intuitive frontend. Zapper hides not only the identity of its users but also the objects they access---the latter is critical to prevent deanonymization attacks. Specifically, Zapper compiles contracts to an assembly language executed by a non-interactive zero-knowledge processor and hides accessed objects by an oblivious Merkle tree construction. We implemented Zapper on an idealized ledger and evaluated it on realistic applications, showing that it allows generating new transactions within 22 s and verifying them within 0.03 s (excluding the time for consensus). This performance is in line with the smart contract system ZEXE (Bowe et al., 2020), which offers analogous data and identity privacy guarantees but suffers from multiple shortcomings affecting security and usability.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560622](https://doi.org/10.1145/3548606.3560622)
## Clues in Tweets: Twitter-Guided Discovery and Analysis of SMS Spam.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#clues-in-tweets-twitter-guided-discovery-and-analysis-of-sms-spam)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#clues-in-tweets-twitter-guided-discovery-and-analysis-of-sms-spam)
### Authors
* Siyuan Tang, Indiana University Bloomington, Bloomington, IN, USA
* Xianghang Mi, University of Science and Technology of China, Hefei, China
* Ying Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* XiaoFeng Wang, Indiana University Bloomington, Bloomington, IN, USA
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, School of Cyber Security, Beijing, China
### Abstract
> With its critical role in business and service delivery through mobile devices, SMS (Short Message Service) has long been abused for spamming, which is still on the rise today possibly due to the emergence of A2P bulk messaging. The effort to control SMS spam has been hampered by the lack of up-to-date information about illicit activities. In our research, we proposed a novel solution to collect recent SMS spam data, at a large scale, from Twitter, where users voluntarily report the spam messages they receive. For this purpose, we designed and implemented SpamHunter, an automated pipeline to discover SMS spam reporting tweets and extract message content from the attached screenshots. Leveraging SpamHunter, we collected from Twitter a dataset of 21,918 SMS spam messages in 75 languages, spanning over four years. To our best knowledge, this is the largest SMS spam dataset ever made public. More importantly, SpamHunter enables us to continuously monitor emerging SMS spam messages, which facilitates the ongoing effort to mitigate SMS spamming. We also performed an in-depth measurement study that sheds light on the new trends in the spammer's strategies, infrastructure and spam campaigns. We also utilized our spam SMS data to evaluate the robustness of the spam countermeasures put in place by the SMS ecosystem, including anti-spam services, bulk SMS services, and text messaging apps. Our evaluation shows that such protection cannot effectively handle those spam samples: either introducing significant false positives or missing a large number of newly reported spam messages.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559351](https://doi.org/10.1145/3548606.3559351)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559351](https://dl.acm.org/doi/pdf/10.1145/3548606.3559351)
## NeVerMore: Exploiting RDMA Mistakes in NVMe-oF Storage Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#nevermore-exploiting-rdma-mistakes-in-nvme-of-storage-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#nevermore-exploiting-rdma-mistakes-in-nvme-of-storage-applications)
### Authors
* Konstantin Taranov, ETH Zurich, Zurich, Switzerland
* Benjamin Rothenberger, ETH Zurich, Zurich, Switzerland
* Daniele De Sensi, ETH Zurich, Zurich, Switzerland
* Adrian Perrig, ETH Zurich, Zurich, Switzerland
* Torsten Hoefler, ETH Zurich, Zurich, Switzerland
### Abstract
> This paper presents a security analysis of the InfiniBand architecture, a prevalent RDMA standard, and NVMe-over-Fabrics (NVMe-oF), a prominent protocol for industrial disaggregated storage that exploits RDMA protocols to achieve low-latency and high-bandwidth access to remote solid-state devices. Our work, NeVerMore, discovers new vulnerabilities in RDMA protocols that unveils several attack vectors on RDMA-enabled applications and the NVMe-oF protocol, showing that the current security mechanisms of the NVMe-oF protocol do not address the security vulnerabilities posed by the use of RDMA. In particular, we show how an unprivileged user can inject packets into any RDMA connection created on a local network controller, bypassing security mechanisms of the operating system and its kernel, and how the injection can be used to acquire unauthorized block access to NVMe-oF devices. Overall, we implement four attacks on RDMA protocols and seven attacks on the NVMe-oF protocol and verify them on the two most popular implementations of NVMe-oF: SPDK and the Linux kernel. To mitigate the discovered attacks we propose multiple mechanisms that can be implemented by RDMA and NVMe-oF providers.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560568](https://doi.org/10.1145/3548606.3560568)
## Truth Serum: Poisoning Machine Learning Models to Reveal Their Secrets.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#truth-serum-poisoning-machine-learning-models-to-reveal-their-secrets)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#truth-serum-poisoning-machine-learning-models-to-reveal-their-secrets)
### Authors
* Florian Tramèr, ETH Zürich, Zürich , Switzerland
* Reza Shokri, National University of Singapore, Singapore, Singapore
* Ayrton San Joaquin, Yale-NUS College, Singapore, Singapore
* Hoang Le, Oregon State University, Corvallis, OR, USA
* Matthew Jagielski, Google, Cambridge, MA, USA
* Sanghyun Hong, Oregon State University, Corvallis, OR, USA
* Nicholas Carlini, Google, Mountain View, CA, USA
### Abstract
> We introduce a new class of attacks on machine learning models. We show that an adversary who can poison a training dataset can cause models trained on this dataset to leak significant private details of training points belonging to other parties. Our active inference attacks connect two independent lines of work targeting the integrity and privacy of machine learning training data. Our attacks are effective across membership inference, attribute inference, and data extraction. For example, our targeted attacks can poison <0.1% of the training dataset to boost the performance of inference attacks by 1 to 2 orders of magnitude. Further, an adversary who controls a significant fraction of the training data (e.g., 50%) can launch untargeted attacks that enable 8× more precise inference on all other users' otherwise-private data points. Our results cast doubts on the relevance of cryptographic privacy guarantees in multiparty computation protocols for machine learning, if parties can arbitrarily select their share of training data.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560554](https://doi.org/10.1145/3548606.3560554)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560554](https://dl.acm.org/doi/pdf/10.1145/3548606.3560554)
## VeRSA: Verifiable Registries with Efficient Client Audits from RSA Authenticated Dictionaries.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#versa-verifiable-registries-with-efficient-client-audits-from-rsa-authenticated-dictionaries)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#versa-verifiable-registries-with-efficient-client-audits-from-rsa-authenticated-dictionaries)
### Authors
* Nirvan Tyagi, Cornell University, Ithaca, NY, USA
* Ben Fisch, Yale University, New Haven, CT, USA
* Andrew Zitek, New York University, New York City, NY, USA
* Joseph Bonneau, New York University, New York City, NY, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
### Abstract
> Verifiable registries allow clients to securely access a key-value mapping maintained by an untrusted server. Registries must be audited to ensure global invariants are preserved, which, in turn, allows for efficient monitoring of individual registry entries by their owners. To this end, existing proposals either assume trusted third-party auditors or rely on incrementally verifiable computation (IVC) via expensive recursive SNARKs to make registries client-auditable. In this work, we give new client-auditable verifiable registries with throughputs up to 100x greater than baseline IVC solutions. Our approach relies on an authenticated dictionary based on RSA accumulators for which we develop a new constant-size invariant proof. We use this as a replacement for Merkle trees to optimize the baseline IVC approach, but also provide a novel construction which dispenses with SNARKs entirely. This latter solution adopts a new checkpointing method to ensure client view consistency.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560605](https://doi.org/10.1145/3548606.3560605)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560605](https://dl.acm.org/doi/pdf/10.1145/3548606.3560605)
## L-SRR: Local Differential Privacy for Location-Based Services with Staircase Randomized Response.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#l-srr-local-differential-privacy-for-location-based-services-with-staircase-randomized-response)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#l-srr-local-differential-privacy-for-location-based-services-with-staircase-randomized-response)
### Authors
* Han Wang, Illinois Institute of Technology, Chicago, IL, USA
* Hanbin Hong, Illinois Institute of Technology, Chicago, IL, USA
* Li Xiong, Emory University, Atlanta, GA, USA
* Zhan Qin, Zhejiang University, Hangzhou, UNK, China
* Yuan Hong, Illinois Institute of Technology & University of Connecticut, Chicago, IL, USA
### Abstract
> Location-based services (LBS) have been significantly developed and widely deployed in mobile devices. It is also well-known that LBS applications may result in severe privacy concerns by collecting sensitive locations. A strong privacy model ''local differential privacy'' (LDP) has been recently deployed in many different applications (e.g., Google RAPPOR, iOS, and Microsoft Telemetry) but not effective for LBS applications due to the low utility of existing LDP mechanisms. To address such deficiency, we propose the first LDP framework for a variety of location-based services (namely ''L-SRR''), which privately collects and analyzes user locations with high utility. Specifically, we design a novel randomization mechanism ''Staircase Randomized Response'' (SRR) and extend the empirical estimation to significantly boost the utility for SRR in different LBS applications (e.g., traffic density estimation, and k-nearest neighbors). We have conducted extensive experiments on four real LBS datasets by benchmarking with other LDP schemes in practical applications. The experimental results demonstrate that L-SRR significantly outperforms them.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560636](https://doi.org/10.1145/3548606.3560636)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560636](https://dl.acm.org/doi/pdf/10.1145/3548606.3560636)
## Practical Volume-Hiding Encrypted Multi-Maps with Optimal Overhead and Beyond.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#practical-volume-hiding-encrypted-multi-maps-with-optimal-overhead-and-beyond)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#practical-volume-hiding-encrypted-multi-maps-with-optimal-overhead-and-beyond)
### Authors
* Jianfeng Wang, Xidian University, Xi'an, China
* Shi-Feng Sun, Shanghai Jiao Tong University, Shanghai, China
* Tianci Li, Xidian University, Xi'an, China
* Saiyu Qi, Xi'an Jiao Tong University, Xi'an, China
* Xiaofeng Chen, Xidian University, Xi'an, China
### Abstract
> Encrypted multi-map (EMM), as a special case of structured encryption, has attracted extensive attention recently. However, most of EMM constructions reveal the real volumes of queried keys, which can be leveraged to launch leakage-abuse attacks, as demonstrated by Kellaris et al. in CCS 2016 and Kornaropoulos et al. in S&P 2021. In this paper, we propose a practical non-lossy volume-hiding EMM scheme, XorMM, that can achieve optimal query communication complexity with minimal storage cost. Specifically, compared to the state-of-the-art dprfMM (Patel et al. CCS 2019), the client in our scheme receives only ℓ matching results while not suffering from data loss, where ℓ is the maximum volume of all keys. In addition, the storage cost of XorMM is approximately 1.23n, where n is the total number of key/value pairs. In contrast, the query communication and storage complexity of dprfMM is 2ℓ and 2(1+α)n respectively, where 0<α<1 is a small constant. Furthermore, we initiate the study of volume-hiding EMM against malicious servers. To the best of our knowledge, we present the first verifiable volume-hiding EMM scheme, XorMM, from merely symmetric cryptographic tools. The scheme still outperforms dprfMM while supporting verifiability, the query complexity and storage overhead of which are approximately ℓ +1 and 2.46n, respectively. Finally, we implement our proposed schemes and compare them with the most efficient scheme dprfMM (Patel et al. CCS 2019). The experimental results demonstrate that both of our schemes are superior to the state-of-the-art in both search and storage cost. In particular, XorMM (resp. VXorMM) brings a saving of 76% (resp. 52%) in server storage cost and achieves a speedup of 1.8x (resp. 1.6x) in search latency.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559345](https://doi.org/10.1145/3548606.3559345)
## ENGRAFT: Enclave-guarded Raft on Byzantine Faulty Nodes.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#engraft-enclave-guarded-raft-on-byzantine-faulty-nodes)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#engraft-enclave-guarded-raft-on-byzantine-faulty-nodes)
### Authors
* Weili Wang, Southern University of Science and Technology, Shenzhen, China
* Sen Deng, Southern University of Science and Technology, Shenzhen, China
* Jianyu Niu, Southern University of Science and Technology, Shenzhen, China
* Michael K. Reiter, Duke University, Durham, NC, USA
* Yinqian Zhang, Southern University of Science and Technology, Shenzhen, China
### Abstract
> This paper presents the first critical analysis of building highly secure, performant, and confidential Byzantine fault-tolerant (BFT) consensus by integrating off-the-shelf crash fault-tolerant (CFT) protocols with trusted execution environments (TEEs). TEEs, like Intel SGX, are CPU extensions that offer applications a secure execution environment with strong integrity and confidentiality guarantees, by leveraging techniques like hardware-assisted isolation, memory encryption, and remote attestation. It has been speculated that when implementing a CFT protocol inside Intel SGX, one would achieve security properties similar to BFT. However, we show in this work that simply combining CFT with SGX does not directly yield a secure BFT protocol, given the wide range of attack vectors on SGX. We systematically study the fallacies in such a strawman design by performing model checking, and propose solutions to enforce safety and liveness. We also present ENGRAFT, a secure enclave-guarded Raft implementation that, firstly, achieves consensus on a cluster of 2f+1 machines tolerating up to f nodes exhibiting Byzantine-fault behavior (but well-behaved enclaves); secondly, offers a new abstraction of confidential consensus for privacy-preserving state machine replication; and finally, allows the reuse of a production-quality Raft implementation, BRaft, in the development of a highly performant BFT system.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560639](https://doi.org/10.1145/3548606.3560639)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560639](https://dl.acm.org/doi/pdf/10.1145/3548606.3560639)
## Group Property Inference Attacks Against Graph Neural Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#group-property-inference-attacks-against-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#group-property-inference-attacks-against-graph-neural-networks)
### Authors
* Xiuling Wang, Stevens Institute of Technology, Hoboken, NJ, USA
* Wendy Hui Wang, Stevens Institute of Technology, Hoboken, NJ, USA
### Abstract
> Recent research has shown that machine learning (ML) models are vulnerable to privacy attacks that leak information about the training data. In this work, we consider Graph Neural Networks (GNNs) as the target model, and focus on a particular type of privacy attack named property inference attack (PIA) which infers the sensitive properties of the training graph through the access to GNNs. While the existing work has investigated PIAs against graph-level properties (e.g., node degree and graph density), we are the first to perform a systematic study of the group property inference attacks (GPIAs) that infer the distribution of particular groups of nodes and links (e.g., there are more links between male nodes than those between female nodes) in the training graph. First, we consider a taxonomy of threat models with various types of adversary knowledge, and design six different attacks for these settings. Second, we demonstrate the effectiveness of these attacks through extensive experiments on three representative GNN models and three real-world graphs. Third, we analyze the underlying factors that contribute to GPIA's success, and show that the GNN model trained on the graphs with or without the target property represents some dissimilarity in model parameters and/or model outputs, which enables the adversary to infer the existence of the property. Further, we design a set of defense mechanisms against the GPIA attacks, and demonstrate empirically that these mechanisms can reduce attack accuracy effectively with small loss on GNN model accuracy.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560662](https://doi.org/10.1145/3548606.3560662)
## DPIS: An Enhanced Mechanism for Differentially Private SGD with Importance Sampling.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dpis-an-enhanced-mechanism-for-differentially-private-sgd-with-importance-sampling)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dpis-an-enhanced-mechanism-for-differentially-private-sgd-with-importance-sampling)
### Authors
* Jianxin Wei, National University of Singapore, Singapore, Singapore
* Ergute Bao, National University of Singapore, Singapore, Singapore
* Xiaokui Xiao, National University of Singapore, Singapore, Singapore
* Yin Yang, Hamad Bin Khalifa University, Doha, Qatar
### Abstract
> Nowadays, differential privacy (DP) has become a well-accepted standard for privacy protection, and deep neural networks (DNN) have been immensely successful in machine learning. The combination of these two techniques, i.e., deep learning with differential privacy, promises the privacy-preserving release of high-utility models trained with sensitive data such as medical records. A classic mechanism for this purpose is DP-SGD, which is a differentially private version of the stochastic gradient descent (SGD) optimizer commonly used for DNN training. Subsequent approaches have improved various aspects of the model training process, including noise decay schedule, model architecture, feature engineering, and hyperparameter tuning. However, the core mechanism for enforcing DP in the SGD optimizer remains unchanged ever since the original DP-SGD algorithm, which has increasingly become a fundamental barrier limiting the performance of DP-compliant machine learning solutions. Motivated by this, we propose DPIS, a novel mechanism for differentially private SGD training that can be used as a drop-in replacement of the core optimizer of DP-SGD, with consistent and significant accuracy gains over the latter. The main idea is to employ importance sampling (IS) in each SGD iteration for mini-batch selection, which reduces both sampling variance and the amount of random noise injected to the gradients that is required to satisfy DP. Although SGD with IS in the non-private setting has been well-studied in the machine learning literature, integrating IS into the complex mathematical machinery of DP-SGD is highly non-trivial; further, IS involves additional private data release which must be protected under differential privacy, as well as computationally intensive gradient computations. DPIS addresses these challenges through novel mechanism designs, fine-grained privacy analysis, efficiency enhancements, and an adaptive gradient clipping optimization. Extensive experiments on four benchmark datasets, namely MNIST, FMNIST, CIFAR-10 and IMDb, involving both convolutional and recurrent neural networks, demonstrate the superior effectiveness of DPIS over existing solutions for deep learning with differential privacy.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560562](https://doi.org/10.1145/3548606.3560562)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560562](https://dl.acm.org/doi/pdf/10.1145/3548606.3560562)
## AntMan: Interactive Zero-Knowledge Proofs with Sublinear Communication.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#antman-interactive-zero-knowledge-proofs-with-sublinear-communication)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#antman-interactive-zero-knowledge-proofs-with-sublinear-communication)
### Authors
* Chenkai Weng, Northwestern University, Evanston, IL, USA
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Zhaomin Yang, Shanghai Key Laboratory of Privacy-Preserving Computation and MatrixElements Technologies, Shanghai, China
* Xiang Xie, Shanghai Key Laboratory of Privacy-Preserving Computation and MatrixElements Technologies, Shanghai, China
* Xiao Wang, Northwestern University, Evanston, IL, USA
### Abstract
> Recent works on interactive zero-knowledge (ZK) protocols provide a new paradigm with high efficiency and scalability. However, these protocols suffer from high communication overhead, often linear to the circuit size. In this paper, we proposed two new ZK protocols with communication sublinear to the circuit size, while maintaining a similar level of computational efficiency. (1) We designed a ZK protocol that can prove B executions of any circuit C in communication O(B + |C|) field elements (with free addition gates), while the best prior work requires a communication of O(B|C|) field elements. Our protocol is enabled by a new tool called as information-theoretic polynomial authentication code, which may be of independent interest. (2) We developed an optimized implementation of this protocol which shows high practicality. For example, with B=2048, |C|=221, and under 50 Mbps bandwidth and 16 threads, QuickSilver, a state-of-the-art ZK protocol based on vector oblivious linear evaluation (VOLE), can only prove 0.71 million MULT gates per second (mgps) and send one field element per gate; our protocol can prove 15.74 mgps (22x improvement) and send 0.0061 field elements per gate (164x improvement) under the same hardware configuration. (3) Extending the above idea, we constructed a ZK protocol that can prove a single execution of any circuit C in communication O(|C|3/4). This is the first ZK protocol with sublinear communication for an arbitrary circuit in the VOLE-based ZK family.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560667](https://doi.org/10.1145/3548606.3560667)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560667](https://dl.acm.org/doi/pdf/10.1145/3548606.3560667)
## Microwalk-CI: Practical Side-Channel Analysis for JavaScript Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#microwalk-ci-practical-side-channel-analysis-for-javascript-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#microwalk-ci-practical-side-channel-analysis-for-javascript-applications)
### Authors
* Jan Wichelmann, University of Lübeck, Lübeck, Germany
* Florian Sieck, University of Lübeck, Lübeck, Germany
* Anna Pätschke, University of Lübeck, Lübeck, Germany
* Thomas Eisenbarth, University of Lübeck, Lübeck, Germany
### Abstract
> Secret-dependent timing behavior in cryptographic implementations has resulted in exploitable vulnerabilities, undermining their security. Over the years, numerous tools to automatically detect timing leakage or even to prove their absence have been proposed. However, a recent study at IEEE S&P 2022 showed that, while many developers are aware of one or more analysis tools, they have major difficulties integrating these into their workflow, as existing tools are tedious to use and mapping discovered leakages to their originating code segments requires expert knowledge. In addition, existing tools focus on compiled languages like C, or analyze binaries, while the industry and open-source community moved to interpreted languages, most notably JavaScript.   In this work, we introduce Microwalk-CI, a novel side-channel analysis framework for easy integration into a JavaScript development workflow. First, we extend existing dynamic approaches with a new analysis algorithm, that allows efficient localization and quantification of leakages, making it suitable for use in practical development. We then present a technique for generating execution traces from JavaScript applications, which can be further analyzed with our and other algorithms originally designed for binary analysis. Finally, we discuss how Microwalk-CI can be integrated into a continuous integration (CI) pipeline for efficient and ongoing monitoring. We evaluate our analysis framework by conducting a thorough evaluation of several popular JavaScript cryptographic libraries, and uncover a number of critical leakages.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560654](https://doi.org/10.1145/3548606.3560654)
## EchoHand: High Accuracy and Presentation Attack Resistant Hand Authentication on Commodity Mobile Devices.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#echohand-high-accuracy-and-presentation-attack-resistant-hand-authentication-on-commodity-mobile-devices)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#echohand-high-accuracy-and-presentation-attack-resistant-hand-authentication-on-commodity-mobile-devices)
### Authors
* Cong Wu, Wuhan University, Wuhan, China
* Jing Chen, Wuhan University, Wuhan, China
* Kun He, Wuhan University, Wuhan, China
* Ziming Zhao, University at Buffalo, Buffalo, NY, USA
* Ruiying Du, Wuhan University, Wuhan , China
* Chen Zhang, Wuhan University, Wuhan , China
### Abstract
> Biometric authentication schemes, i.e., fingerprint and face authentication, raise serious privacy concerns. To alleviate such concerns, hand authentication has been proposed recently. However, existing hand authentication schemes use dedicated hardware, such as infrared or depth cameras, which are not available on commodity mobile devices. In this paper, we present EchoHand, a high accuracy and presentation attack resistant authentication scheme that complements camera-based 2-dimensional hand geometry recognition of one hand with active acoustic sensing of the other holding hand. EchoHand plays an inaudible acoustic signal using the speaker to actively sense the holding hand and collects the echoes using the microphone. EchoHand does not rely on any specialized hardware but uses the built-in speaker, microphone and camera. Moreover, EchoHand does not place more burdens on users than existing hand authentication methods. We conduct comprehensive experiments to evaluate the reliability and security of EchoHand. The results show that EchoHand has a low equal error rate of 2.45% with as few as 10 training data points and it defeats presentation attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560553](https://doi.org/10.1145/3548606.3560553)
## Platypus: A Central Bank Digital Currency with Unlinkable Transactions and Privacy-Preserving Regulation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#platypus-a-central-bank-digital-currency-with-unlinkable-transactions-and-privacy-preserving-regulation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#platypus-a-central-bank-digital-currency-with-unlinkable-transactions-and-privacy-preserving-regulation)
### Authors
* Karl Wüst, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Kari Kostiainen, ETH Zurich, Zurich, Switzerland
* Noah Delius, ETH Zurich, Zurich, Switzerland
* Srdjan Capkun, ETH Zurich, Zurich, Switzerland
### Abstract
> Due to the popularity of blockchain-based cryptocurrencies, the increasing digitalization of payments, and the constantly reducing role of cash in society, central banks have shown an increased interest in deploying central bank digital currencies (CBDCs) that could serve as a digital cash-equivalent. While most recent research on CBDCs focuses on blockchain technology, it is not clear that this choice of technology provides the optimal solution. In particular, the centralized trust model of a CBDC offers opportunities for different designs. In this paper, we depart from blockchain designs and instead build on ideas from traditional e-cash schemes. We propose a new style of building digital currencies that combines the transaction processing model of e-cash with an account-based fund management model. We argue that such a style of building digital currencies is especially well-suited to CBDCs. We also design the first such digital currency system, called Platypus, that provides strong privacy, high scalability, and expressive but simple regulation, which are all critical features for a CBDC. Platypus achieves these properties by adapting techniques similar to those used in anonymous blockchain cryptocurrencies like Zcash to fit our account model and applying them to the e-cash context.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560617](https://doi.org/10.1145/3548606.3560617)
## Protecting Critical Inter-Domain Communication through Flyover Reservations.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#protecting-critical-inter-domain-communication-through-flyover-reservations)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#protecting-critical-inter-domain-communication-through-flyover-reservations)
### Authors
* Marc Wyss, ETH Zurich, Zurich, Switzerland
* Giacomo Giuliari, ETH Zurich, Zurich, Switzerland
* Jonas Mohler, ETH Zurich, Zurich, Switzerland
* Adrian Perrig, ETH Zurich, Zurich, Switzerland
### Abstract
> To protect against naturally occurring or adversely induced congestion in the Internet, we propose the concept of flyover reservations, a fundamentally new approach for addressing the availability demands of critical low-volume applications. In contrast to path-based reservation systems, flyovers are fine-grained "hop-based" bandwidth reservations on the level of individual autonomous systems. We demonstrate the scalability of this approach experimentally through simulations on large graphs. Moreover, we bring the flyovers' potential to full fruition by introducing Helia, a protocol for secure flyover reservation setup and data transmission. We evaluate Helia's performance based on an implementation in DPDK, demonstrating authentication and forwarding of reservation traffic at 160 Gbps. Our security analysis shows that Helia can resist a large variety of powerful attacks against reservation admission and traffic forwarding. Despite its simplicity, Helia outperforms current state-of-the-art reservation systems in many key metrics.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560582](https://doi.org/10.1145/3548606.3560582)
## Understanding and Mitigating Remote Code Execution Vulnerabilities in Cross-platform Ecosystem.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-and-mitigating-remote-code-execution-vulnerabilities-in-cross-platform-ecosystem)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#understanding-and-mitigating-remote-code-execution-vulnerabilities-in-cross-platform-ecosystem)
### Authors
* Feng Xiao, Georgia Institute of Technology, Atlanta, GA, USA
* Zheng Yang, Georgia Institute of Technology, Atlanta, GA, USA
* Joey Allen, Georgia Institute of Technology, Atlanta, GA, USA
* Guangliang Yang, Fudan University, Shanghai, China
* Grant Williams, Georgia Institute of Technology, Atlanta, GA, USA
* Wenke Lee, Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> JavaScript cross-platform frameworks are becoming increasingly popular. They help developers easily and conveniently build cross-platform applications while just needing only one JavaScript codebase. Recent security reports showed several high-profile cross-platform applications (e.g., Slack, Microsoft Teams, and Github Atom) suffered injection issues, which were often introduced by Cross-site Scripting (XSS) or embedded untrusted remote content like ads. These injections open security holes for remote web attackers, and cause serious security risks, such as allowing injected malicious code to run arbitrary local executables in victim devices (referred to as XRCE attacks). However, until now, XRCE vectors and behaviors and the root cause of XRCE were rarely studied and understood. Although the cross-platform framework developers and community responded quickly by offering multiple security features and suggestions, these mitigations were empirically proposed with unknown effectiveness. In this paper, we conduct the first systematic study of the XRCE vulnerability class in the cross-platform ecosystem. We first build a generic model for different cross-platform applications to reduce their semantic and behavioral gaps. We use this model to (1) study XRCE by comprehensively defining its attack scenarios, surfaces, and behaviors, (2) investigate and study the state-of-the-art defenses, and verify their weakness against XRCE attacks. Our study on 640 real-world cross-platform applications shows, despite the availability of existing defenses, XRCE widely affects the cross-platform ecosystem. 75% of applications may be impacted by XRCE, including Microsoft Teams. (3) Finally, we propose XGuard, a novel defense technology to automatically mitigate all XRCE variants derived from our concluded XRCE behaviors.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559340](https://doi.org/10.1145/3548606.3559340)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559340](https://dl.acm.org/doi/pdf/10.1145/3548606.3559340)
## CETIS: Retrofitting Intel CET for Generic and Efficient Intra-process Memory Isolation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cetis-retrofitting-intel-cet-for-generic-and-efficient-intra-process-memory-isolation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cetis-retrofitting-intel-cet-for-generic-and-efficient-intra-process-memory-isolation)
### Authors
* Mengyao Xie, SKLP, Institute of Computing Technology, CAS, University of Chinese Academy of Sciences, Beijing, China
* Chenggang Wu, SKLP, Institute of Computing Technology, CAS & University of Chinese Academy of Sciences, Zhongguancun Laboratory, Beijing, China
* Yinqian Zhang, Department of Computer Science and Engineering, SUSTech, Research Institute of Trustworthy Autonomous Systems, SUSTech, Shenzhen, China
* Jiali Xu, SKLP, Institute of Computing Technology, CAS, University of Chinese Academy of Sciences, Beijing, China
* Yuanming Lai, SKLP, Institute of Computing Technology, CAS, University of Chinese Academy of Sciences, Beijing, China
* Yan Kang, SKLP, Institute of Computing Technology, CAS, University of Chinese Academy of Sciences, Beijing, China
* Wei Wang, SKLP, Institute of Computing Technology, CAS, Beijing, China
* Zhe Wang, SKLP, Institute of Computing Technology, CAS, Zhongguancun Laboratory, Beijing, China
### Abstract
> Intel control-flow enforcement technology (CET) is a new hardware feature available in recent Intel processors. It supports the coarse-grained control-flow integrity for software to defeat memory corruption attacks. In this paper, we retrofit CET, particularly the write-protected shadow pages of CET used for implementing shadow stacks, to develop a generic and efficient intra-process memory isolation mechanism, dubbed CETIS. To provide user-friendly interfaces, a CETIS framework was developed, which provides memory file abstraction for the isolated memory regions and a set of APIs to access said regions. CETIS also comes with a compiler-assisted tool chain for users to build secure applications easily. The practicality of using CETIS to protect CPI, CFIXX, and JIT-compilers was demonstrated, and the evaluation reveals that CETIS is performed better than state-of-the-art intra-memory isolation mechanisms, such as MPK.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559344](https://doi.org/10.1145/3548606.3559344)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559344](https://dl.acm.org/doi/pdf/10.1145/3548606.3559344)
## zkBridge: Trustless Cross-chain Bridges Made Practical.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#zkbridge-trustless-cross-chain-bridges-made-practical)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#zkbridge-trustless-cross-chain-bridges-made-practical)
### Authors
* Tiancheng Xie, UC Berkeley, Berkeley, CA, USA
* Jiaheng Zhang, UC Berkeley, Berkeley, CA, USA
* Zerui Cheng, Tsinghua University, Beijing, China
* Fan Zhang, Yale University, New Haven, CT, USA
* Yupeng Zhang, Texas A&M University, College Station, TX, USA
* Yongzheng Jia, UC Berkeley, Berkeley, CA, USA
* Dan Boneh, Stanford University, Stanford, CA, USA
* Dawn Song, UC Berkeley, Berkeley, CA, USA
### Abstract
> Blockchains have seen growing traction with cryptocurrencies reaching a market cap of over 1 trillion dollars, major institution investors taking interests, and global impacts on governments, businesses, and individuals.  Also growing significantly is the heterogeneity of the ecosystem where a variety of blockchains co-exist. Cross-chain bridge is a necessary building block in this multi-chain ecosystem. Existing solutions, however, either suffer from performance issues or rely on honesty assumptions of committees that significantly lower the security. Recurring attacks against bridges have cost users more than 1.5 billion USD. In this paper, we introduce zkBridge, an efficient cross-chain bridge that guarantees strong security without extra trust assumptions. With succinct proofs, zkBridge not only guarantees correctness, but also significantly reduces on-chain verification cost. We propose novel succinct proof protocols that are orders-of-magnitude faster than existing solutions for workload in zkBridge. With a modular design, zkBridge enables a few useful capabilities, including message passing, token transferring, and other computational logic operating on state changes from different chains. We fully implemented zkBridge between Cosmos and Ethereum and evaluated the end-to-end performance. The experiment shows that zkBridge achieves practical performance: it can generate a block header proof within 2 minutes, while verifying proofs on-chain costs less than 220K gas (the same as Groth16). Relaying a transaction from Cosmos to Ethereum costs 210K gas.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560652](https://doi.org/10.1145/3548606.3560652)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560652](https://dl.acm.org/doi/pdf/10.1145/3548606.3560652)
## Automatic Detection of Fake Key Attacks in Secure Messaging.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#automatic-detection-of-fake-key-attacks-in-secure-messaging)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#automatic-detection-of-fake-key-attacks-in-secure-messaging)
### Authors
* Tarun Kumar Yadav, Brigham Young University, Provo, UT, USA
* Devashish Gosain, Max Planck Institute for Informatics, Saarbrücken, Germany
* Amir Herzberg, University of Connecticut, Storrs, CT, USA
* Daniel Zappala, Brigham Young University, Provo, UT, USA
* Kent Seamons, Brigham Young University, Provo, UT, USA
### Abstract
> Popular instant messaging applications such as WhatsApp and Signal provide end-to-end encryption for billions of users. These applications often rely on a centralized, application-specific server to distribute public keys and relay encrypted messages between the users. As a result, they prevent passive attacks but are vulnerable to some active attacks. A malicious or hacked server can distribute fake keys to users to perform man-in-the-middle or impersonation attacks. While typical secure messaging applications provide a manual method for users to detect these attacks, this burdens users, and studies show it is ineffective in practice. This paper presents KTACA, a completely automated approach for key verification that is oblivious to users and easy to deploy. We motivate KTACA by designing two approaches to automatic key verification. One approach uses client auditing (KTCA) and the second uses anonymous key monitoring (AKM). Both have relatively inferior security properties, leading to KTACA, which combines these approaches to provide the best of both worlds. We provide a security analysis of each defense, identifying which attacks they can automatically detect. We implement the active attacks to demonstrate they are possible, and we also create a prototype implementation of all the defenses to measure their performance and confirm their feasibility. Finally, we discuss the strengths and weaknesses of each defense, the load they impose on clients and service providers, and their deployment considerations.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560588](https://doi.org/10.1145/3548606.3560588)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560588](https://dl.acm.org/doi/pdf/10.1145/3548606.3560588)
## WINK: Wireless Inference of Numerical Keystrokes via Zero-Training Spatiotemporal Analysis.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#wink-wireless-inference-of-numerical-keystrokes-via-zero-training-spatiotemporal-analysis)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#wink-wireless-inference-of-numerical-keystrokes-via-zero-training-spatiotemporal-analysis)
### Authors
* Edwin Yang, The University of Oklahoma, Norman, OK, USA
* Qiuye He, The University of Oklahoma, Norman, OK, USA
* Song Fang, The University of Oklahoma, Norman, OK, USA
### Abstract
> Sensitive numbers play an unparalleled role in identification and authentication. Recent research has revealed plenty of side-channel attacks to infer keystrokes, which require either a training phase or a dictionary to build the relationship between an observed signal disturbance and a keystroke. However, training-based methods are unpractical as the training data about the victim are hard to obtain, while dictionary-based methods cannot infer numbers, which are not combined according to linguistic rules like letters are. We observe that typing a number creates not only a number of observed disturbances in space (each corresponding to a digit), but also a sequence of periods between each disturbance. Based upon existing work that utilizes inter-keystroke timing to infer keystrokes, we build a novel technique called WINK that combines the spatial and time domain information into a spatiotemporal feature of keystroke-disturbed wireless signals. With this spatiotemporal feature, WINK can infer typed numbers without the aid of any training. Experimental results on top of software-defined radio platforms show that WINK can vastly reduce the guesses required for breaking certain 6-digit PINs from 1 million to as low as 16, and can infer over 52% of user-chosen 6-digit PINs with less than 100 attempts.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559339](https://doi.org/10.1145/3548606.3559339)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559339](https://dl.acm.org/doi/pdf/10.1145/3548606.3559339)
## An Extensive Study of Residential Proxies in China.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#an-extensive-study-of-residential-proxies-in-china)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#an-extensive-study-of-residential-proxies-in-china)
### Authors
* Mingshuo Yang, Shandong University, Jinan, China
* Yunnan Yu, University at Buffalo, Buffalo, NY, USA
* Xianghang Mi, University of Science and Technology of China, Beijing, China
* Shujun Tang, QI-ANXIN Technology Research Institute, Beijing, China
* Shanqing Guo, Shandong University & Quancheng Laboratory, Jinan, China
* Yilin Li, Shandong University, Jinan, China
* Xiaofeng Zheng, Tsinghua University & QI-ANXIN Technology Research Institute, Beijing, China
* Haixin Duan, Tsinghua University & QI-ANXIN Technology Research Institute, Beijing, China
### Abstract
> We carry out the first in-depth characterization of residential proxies (RESIPs) in China, for which little is studied in previous works. Our study is made possible through a semantic-based classifier to automatically capture RESIP services. In addition to the classifier, new techniques have also been identified to capture RESIPs without interacting with and relaying traffic through RESIP services, which can significantly lower the cost and thus allow continuous monitoring of RESIPs. Our RESIP service classifier has achieved good performance with a recall of 99.7% and a precision of 97.6% in 10-fold cross validation. Applying the classifier has identified 399 RESIP services, a much larger set compared to 38 RESIP services collected in all previous works. Our effort of RESIP capturing leads to a collection of 9,077,278 RESIP IPs (51.36% are located in China), 96.70% of which are not covered in publicly available RESIP datasets. An extensive measurement on RESIPs and their services has uncovered a set of interesting findings as well as several security implications. Especially, 80.05% RESIP IPs located in China have sourced at least one malicious traffic flows during 2021, resulting in 52-million malicious traffic flows in total. And RESIPs have also been observed in corporation networks of 559 sensitive organizations including government agencies, education institutions and enterprises. Also, 3,232,698 China RESIP IPs have opened at least one TCP/UDP port for accepting relaying requests, which incurs non-negligible security risks to the local network of RESIPs. Besides, 91% China RESIP IPs are of a lifetime fewer than 10 days while most China RESIP services show up a crest-trough pattern in terms of the daily active RESIPs across time.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559377](https://doi.org/10.1145/3548606.3559377)
## Detecting and Measuring Misconfigured Manifests in Android Apps.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#detecting-and-measuring-misconfigured-manifests-in-android-apps)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#detecting-and-measuring-misconfigured-manifests-in-android-apps)
### Authors
* Yuqing Yang, The Ohio State University, Columbus, OH, USA
* Mohamed Elsabagh, Quokka, McLean, VA, USA
* Chaoshun Zuo, The Ohio State University, Columbus, OH, USA
* Ryan Johnson, Quokka, McLean, VA, USA
* Angelos Stavrou, Quokka, McLean, VA, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
### Abstract
> The manifest file of an Android app is crucial for app security as it declares sensitive app configurations, such as access permissions required to access app components. Surprisingly, we noticed a number of widely-used apps (some with over 500 million downloads) containing misconfigurations in their manifest files that can result in severe security issues. This paper presents ManiScope, a tool to automatically detect misconfigurations of manifest files when given an Android APK. The key idea is to build a manifest XML Schema by extracting ManiScope constraints from the manifest documentation with novel domain-aware NLP techniques and rules, and validate manifest files against the schema to detect misconfigurations. We have implemented ManiScope, with which we have identified 609,428 (33.20%) misconfigured Android apps out of 1,853,862 apps from Google Play, and 246,658 (35.64%) misconfigured ones out of 692,106 pre-installed apps from 4,580 Samsung firmwares, respectively. Among them, 84,117 (13.80%) of misconfigured Google Play apps and 56,611 (22.95%) of misconfigured pre-installed apps have various security implications including app defrauding, message spoofing, secret data leakage, and component hijacking.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560607](https://doi.org/10.1145/3548606.3560607)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560607](https://dl.acm.org/doi/pdf/10.1145/3548606.3560607)
## Cross Miniapp Request Forgery: Root Causes, Attacks, and Vulnerability Detection.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cross-miniapp-request-forgery-root-causes-attacks-and-vulnerability-detection)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cross-miniapp-request-forgery-root-causes-attacks-and-vulnerability-detection)
### Authors
* Yuqing Yang, The Ohio State University, Columbus, OH, USA
* Yue Zhang, The Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
### Abstract
> A miniapp is a full-fledged app that is executed inside a mobile super app such as WeChat or SnapChat. Being mini by nature, it often has to communicate with other miniapps to accomplish complicated tasks. However, unlike a web app that uses network domains (i.e., IP addresses) to navigate between different web apps, a miniapp uses a unique global appId assigned by the super app to navigate between miniapps. Unfortunately, any missing checks of the sender's appId in a receiver miniapp can lead to a new type of attacks we name it cross-miniapp request forgery (CMRF). In addition to demystifying the root cause of this attack (i.e., the essence of the vulnerability), this paper also seeks to measure the popularity of this vulnerability among miniapps by developing CmrfScanner, which is able to statically detect the CMRF-vulnerability based on the abstract syntax tree of miniapp code to determine whether there are any missing checks of the appIds. We have tested CmrfScanner with 2,571,490 WeChat miniapps and 148,512 Baidu miniapps, and identified 52,394 (2.04%) WeChat miniapps and 494 (0.33%) Baidu miniapps that involve cross-communication. Among them, CmrfScanner further identified that 50,281 (95.97%) of WeChat miniapps, and 493 (99.80%) of Baidu miniapps lack the appID checks of the sender's mini-apps, indicating that a large amount of miniapp developers are not aware of this attack. We also estimated the impact of this vulnerability and found 55.05% of the lack of validation WeChat miniapps (7.09% of such Baidu miniapps) can have direct security consequences such as privileged data access, information leakage, promotion abuse, and even shopping for free. We hope that our findings can raise awareness among miniapp developers, and future miniapps will not be subject to CMRF attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560597](https://doi.org/10.1145/3548606.3560597)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560597](https://dl.acm.org/doi/pdf/10.1145/3548606.3560597)
## Enhanced Membership Inference Attacks against Machine Learning Models.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#enhanced-membership-inference-attacks-against-machine-learning-models)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#enhanced-membership-inference-attacks-against-machine-learning-models)
### Authors
* Jiayuan Ye, National University of Singapore (NUS), Singapore, Singapore
* Aadyaa Maddi, National University of Singapore (NUS), Singapore, Singapore
* Sasi Kumar Murakonda, Privitar Labs, London, United Kingdom
* Vincent Bindschaedler, University of Florida, Gainesville, FL, USA
* Reza Shokri, National University of Singapore (NUS), Singapore, Singapore
### Abstract
> How much does a machine learning algorithm leak about its training data, and why? Membership inference attacks are used as an auditing tool to quantify this leakage. In this paper, we present a comprehensivehypothesis testing framework that enables us not only to formally express the prior work in a consistent way, but also to design new membership inference attacks that use reference models to achieve a significantly higher power (true positive rate) for any (false positive rate) error. More importantly, we explainwhy different attacks perform differently. We present a template for indistinguishability games, and provide an interpretation of attack success rate across different instances of the game. We discuss various uncertainties of attackers that arise from the formulation of the problem, and show how our approach tries to minimize the attack uncertainty to the one bit secret about the presence or absence of a data point in the training set. We perform adifferential analysis between all types of attacks, explain the gap between them, and show what causes data points to be vulnerable to an attack (as the reasons vary due to different granularities of memorization, from overfitting to conditional memorization). Our auditing framework is openly accessible as part of thePrivacy Meter software tool.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560675](https://doi.org/10.1145/3548606.3560675)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560675](https://dl.acm.org/doi/pdf/10.1145/3548606.3560675)
## HeatDeCam: Detecting Hidden Spy Cameras via Thermal Emissions.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#heatdecam-detecting-hidden-spy-cameras-via-thermal-emissions)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#heatdecam-detecting-hidden-spy-cameras-via-thermal-emissions)
### Authors
* Zhiyuan Yu, Washington University in St. Louis, St. Louis, MO, USA
* Zhuohang Li, University of Tennessee, Knoxville, Knoxville, TN, USA
* Yuanhaur Chang, Washington University in St. Louis, St. Louis, MO, USA
* Skylar Fong, Washington University in St. Louis, St. Louis, MO, USA
* Jian Liu, University of Tennessee, Knoxville, Knoxville, TN, USA
* Ning Zhang, Washington University in St. Louis, St. Louis, MO, USA
### Abstract
> Unlawful video surveillance of unsuspecting individuals using spy cameras has become an increasing concern. To mitigate these threats, there are both commercial products and research prototypes designed to detect hidden spy cameras in household and office environments. However, existing work often relies heavily on user expertise and only applies to wireless cameras. To bridge this gap, we propose HeatDeCam, a thermal-imagery-based spy camera detector, capable of detecting hidden spy cameras with or without built-in wireless connectivity. To reduce the reliance on user expertise, HeatDeCam leverages a compact neural network deployed on a smartphone to recognize unique heat dissipation patterns of spy cameras. To evaluate the proposed system, we have collected and open-sourced a dataset of a total of 22506 thermal and visual images. These images consist of 11 spy cameras collected from 6 rooms across different environmental conditions. Using this dataset, we found HeatDeCam can achieve over 95% accuracy in detecting hidden cameras. We have also conducted a usability evaluation involving a total of 416 participants using both an online survey and an in-person usability test to validate HeatDeCam.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560669](https://doi.org/10.1145/3548606.3560669)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560669](https://dl.acm.org/doi/pdf/10.1145/3548606.3560669)
## Caulk: Lookup Arguments in Sublinear Time.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#caulk-lookup-arguments-in-sublinear-time)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#caulk-lookup-arguments-in-sublinear-time)
### Authors
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
* Vitalik Buterin, Ethereum Foundation, Singapore, Singapore
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg, Luxembourg
* Mary Maller, Ethereum Foundation, London, United Kingdom
* Anca Nitulescu, Protocol Labs, Paris, France
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### Abstract
> We present position-hiding linkability for vector commitment schemes: one can prove in zero knowledge that one or m values that comprise commitment \cm all belong to the vector of size N committed to in \com. Our construction \textsfCaulk can be used for membership proofs and lookup arguments and outperforms all existing alternatives in prover time by orders of magnitude.   For both single- and multi-membership proofs the \textsfCaulk protocol beats SNARKed Merkle proofs by the factor of 100 even if the latter is instantiated with Poseidon hash. Asymptotically our prover needs O(m^2 + młog N) time to prove a batch of m openings, whereas proof size is O(1) and verifier time is O(łog(łog N)). As a lookup argument, \textsfCaulk is the first scheme with prover time sublinear in the table size, assuming O(Nłog N) preprocessing time and O(N) storage. It can be used as a subprimitive in verifiable computation schemes in order to drastically decrease the lookup overhead.   Our scheme comes with a reference implementation and benchmarks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560646](https://doi.org/10.1145/3548606.3560646)
## PalanTír: Optimizing Attack Provenance with Hardware-enhanced System Observability.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#palant-r-optimizing-attack-provenance-with-hardware-enhanced-system-observability)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#palant-r-optimizing-attack-provenance-with-hardware-enhanced-system-observability)
### Authors
* Jun Zeng, National University of Singapore, Singapore, Singapore
* Chuqi Zhang, National University of Singapore, Singapore, Singapore
* Zhenkai Liang, National University of Singapore, Singapore, Singapore
### Abstract
> System auditing is the foundation of attack provenance to investigate root causes and ramifications of cyber-attacks. However, provenance tracking on coarse-grained audit logs suffers from false causalities caused by dependency explosion. Recent approaches address this problem by increasing provenance granularity using execution partitioning or record-and-replay techniques. Unfortunately, they require program instrumentation and/or impose an unaffordable overhead, which is not practical in deployment. In this paper, we present PalanTír, a provenance-based system that enhances system observability to enable precise and scalable attack investigation. Leveraging hardware-assisted processor tracing (PT), PalanTír optimizes attack provenance in system-call-level audit logs by recovering instruction-level causalities via taint analysis based on PT traces. To reduce the scope of taint analysis and simplify the complexity of taint propagation, PalanTír statically profiles program binaries to identify instructions causally relevant to audit logs and pre-summarize their taint propagation logic at the coarse granularity of basic blocks. Our evaluation against real-life cyber-attacks shows PalanTír's efficiency and effectiveness in attack scenario reconstruction. We also demonstrate that PalanTír can scale to large applications (e.g., Nginx and Sendmail) compiled from upwards of 463,510 lines of C/C++ code.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560570](https://doi.org/10.1145/3548606.3560570)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560570](https://dl.acm.org/doi/pdf/10.1145/3548606.3560570)
## PACE: Fully Parallelizable BFT from Reproposable Byzantine Agreement.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pace-fully-parallelizable-bft-from-reproposable-byzantine-agreement)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#pace-fully-parallelizable-bft-from-reproposable-byzantine-agreement)
### Authors
* Haibin Zhang, Beijing Institute of Technology, Beijing, China
* Sisi Duan, Tsinghua University, Beijing, China
### Abstract
> The classic asynchronous Byzantine fault tolerance (BFT) framework of Ben-Or, Kemler, and Rabin (BKR) and its descendants rely on reliable broadcast (RBC) and asynchronous binary agreement (ABA). However, BKR does not allow all ABA instances to run in parallel, a well-known performance bottleneck. We propose PACE, a generic framework that removes the bottleneck, allowing fully parallelizable ABA instances. PACE is built on RBC and reproposable ABA (RABA). Different from the conventional ABA, RABA allows a replica to change its mind and vote twice. We show how to efficiently build RABA protocols from existing ABA protocols and a new ABA protocol that we introduce. We implement six new BFT protocols: three in the BKR framework, and three in the PACE framework. Via a deployment using 91 replicas on Amazon EC2 across five continents, we show that all PACE instantiations, in both failure-free and failure scenarios, significantly outperform their BKR counterparts, and prior BFT protocols such as BEAT and Dumbo, in terms of latency, throughput, latency vs. throughput, and scalability.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559348](https://doi.org/10.1145/3548606.3559348)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559348](https://dl.acm.org/doi/pdf/10.1145/3548606.3559348)
## I'm SPARTACUS, No, I'm SPARTACUS: Proactively Protecting Users from Phishing by Intentionally Triggering Cloaking Behavior.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#im-spartacus-no-im-spartacus-proactively-protecting-users-from-phishing-by-intentionally-triggering-cloaking-behavior)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#im-spartacus-no-im-spartacus-proactively-protecting-users-from-phishing-by-intentionally-triggering-cloaking-behavior)
### Authors
* Penghui Zhang, Arizona State University, Tempe, AZ, USA
* Zhibo Sun, Drexel University, Philadelphia, PA, USA
* Sukwha Kyung, Arizona State University, Tempe, AZ, USA
* Hans Walter Behrens, Arizona State University, Tempe, AZ, USA
* Zion Leonahenahe Basque, Arizona State University, Tempe, AZ, USA
* Haehyun Cho, Soongsil University, Seoul, Republic of Korea
* Adam Oest, PayPal, Inc., Scottsdale, AZ, USA
* Ruoyu Wang, Arizona State University, Tempe, AZ, USA
* Tiffany Bao, Arizona State University, Tempe, AZ, USA
* Yan Shoshitaishvili, Arizona State University, Tempe, AZ, USA
* Gail-Joon Ahn, Arizona State University, Tempe, AZ, USA
* Adam Doupé, Arizona State University, Tempe, AZ, USA
### Abstract
> Phishing is a ubiquitous and increasingly sophisticated online threat. To evade mitigations, phishers try to "cloak" malicious content from defenders to delay their appearance on blacklists, while still presenting the phishing payload to victims. This cat-and-mouse game is variable and fast-moving, with many distinct cloaking methods---we construct a dataset identifying 2,933 real-world phishing kits that implement cloaking mechanisms. These kits use information from the host, browser, and HTTP request to classify traffic as either anti-phishing entity or potential victim and change their behavior accordingly. In this work we present SPARTACUS, a technique that subverts the phishing status quo by disguising user traffic as anti-phishing entities. These intentional false positives trigger cloaking behavior in phishing kits, thus hiding the malicious payload and protecting the user without disrupting benign sites. To evaluate the effectiveness of this approach, we deployed SPARTACUS as a browser extension from November 2020 to July 2021. During that time, SPARTACUS browsers visited 160,728 reported phishing URLs in the wild. Of these, SPARTACUS protected against 132,274 sites (82.3%). The phishing kits which showed malicious content to SPARTACUS typically did so due to ineffective cloaking---the majority (98.4%) of the remainder were detected by conventional anti-phishing systems such as Google Safe Browsing or VirusTotal, and would be blacklisted regardless. We further evaluate SPARTACUS against benign websites sampled from the Alexa Top One Million List for impacts on latency, accessibility, layout, and CPU overhead, finding minimal performance penalties and no loss in functionality.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559334](https://doi.org/10.1145/3548606.3559334)
## When Good Becomes Evil: Tracking Bluetooth Low Energy Devices via Allowlist-based Side Channel and Its Countermeasure.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#when-good-becomes-evil-tracking-bluetooth-low-energy-devices-via-allowlist-based-side-channel-and-its-countermeasure)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#when-good-becomes-evil-tracking-bluetooth-low-energy-devices-via-allowlist-based-side-channel-and-its-countermeasure)
### Authors
* Yue Zhang, The Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, The Ohio State University, Columbus, OH, USA
### Abstract
> Bluetooth Low Energy (BLE) is ubiquitous today. To prevent a BLE device (e.g., a smartphone) from being connected by unknown devices, it uses allowlisting to allow the connectivity from only recognized devices. Unfortunately, we show that this allowlist feature actually introduces a side channel for device tracking, since a device with the allowed list behaves differently even though it has used randomized MAC addresses. Worse even we also find that the current MAC address randomization scheme specified in Bluetooth protocol is flawed, suffering from a replay attack with which an attacker can replay a sniffed MAC address to probe whether a targeted device will respond or not based on its allowlist. We have validated our allowlist-based side channel attacks with 43 BLE peripheral devices, 11 centrals, and 4 development boards, and found none of them once configured with allowlisting is immune to the proposed attacks. We advocate the use of an interval unpredictable, central and peripheral synchronized random MAC address randomization scheme to defeat passive device tracking (introducing 1% power consumption overhead for centrals and 6.75% for peripherals, and 88.49 μs performance overhead for centrals and 94.46 μs for peripherals), and the use of timestamps to derive randomized MAC addresses such that attackers can no longer be able to replay them to defeat active device tracking (introducing 3.04% overhead for peripherals, and 63.58 μs and 20.54 μs performance overhead for centrals and peripherals). We have disclosed our findings to Bluetooth SIG and many other stake-holders in October 2020. Bluetooth SIG assigned CVE-2020-35473 to track this logical-level protocol flaw. Google assigned our findings as a high severity design flaw and awarded us with a bug bounty.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559372](https://doi.org/10.1145/3548606.3559372)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559372](https://dl.acm.org/doi/pdf/10.1145/3548606.3559372)
## VOProof: Efficient zkSNARKs from Vector Oracle Compilers.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#voproof-efficient-zksnarks-from-vector-oracle-compilers)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#voproof-efficient-zksnarks-from-vector-oracle-compilers)
### Authors
* Yuncong Zhang, Shanghai Jiao Tong University, Shanghai, China
* Alan Szepeniec, Nervos, Hangzhou, China
* Ren Zhang, Cryptape Co. Ltd. & Nervos, Hangzhou, China
* Shi-Feng Sun, Shanghai Jiao Tong University, Shanghai, China
* Geng Wang, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> The design of zkSNARKs is increasingly complicated and requires familiarity with a broad class of cryptographic and algebraic tools. This complexity in zkSNARK design also increases the difficulty in zkSNARK implementation, analysis, and optimization. To address this complexity, we develop a new workflow for designing and implementing zkSNARKs, called VOProof. In VOProof, the designer only needs to construct a Vector Oracle (VO) protocol that is intuitive and straightforward to design, and then feeds this protocol to our VO compiler to transform it into a fully functional zkSNARK. This new workflow conceals most algebraic and cryptographic operations inside the compiler, so that the designer is no longer required to understand these cumbersome and error prone procedures. Moreover, our compiler can be fine-tuned to compile one VO protocol into multiple zkSNARKs with different tradeoffs. We apply VOProof to construct three general-purpose zkSNARKs targeting three popular representations of arithmetic circuits: the Rank-1 Constraint System (R1CS), the Hadamard Product Relation (HPR), and the PLONK circuit. These zkSNARKs have shorter and more intuitive descriptions, thus are easier to implement and optimize compared to prior works. To evaluate their performance, we implement a Python framework for describing VO protocols and compiling them into working Rust code of zkSNARKs. Our evaluation shows that the VOProof-based zkSNARKs have competitive performance, especially in proof size and verification time, e.g., both reduced by roughly 50% compared to Marlin (Chiesa et al., EUROCRYPT 2020). These improvements make the VOProof-based zkSNARKs more preferable in blockchain scenarios where the proof size and verification time are critical.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559387](https://doi.org/10.1145/3548606.3559387)
## Characterizing and Detecting Non-Consensual Photo Sharing on Social Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#characterizing-and-detecting-non-consensual-photo-sharing-on-social-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#characterizing-and-detecting-non-consensual-photo-sharing-on-social-networks)
### Authors
* Tengfei Zheng, National University of Defense Technology, Changsha, China
* Tongqing Zhou, National University of Defense Technology, Changsha, China
* Qiang Liu, National University of Defense Technology, Changsha, China
* Kui Wu, University of Victoria, Victoria, Canada
* Zhiping Cai, National University of Defense Technology, Changsha, China
### Abstract
> Photo capturing and sharing have become routine daily activities for social platform users. Alongside the entertainment of social interaction, we are experiencing tremendous visual violation and photo abusing. Especially, users may be unconsciously filmed and exposed online, which is termed as the non-consensual sharing issue. Unfortunately, this problem cannot be well handled with proactive access control or dedicated bystander detection, as users are unaware of their situations and may be filmed stealthily. We propose Videre on behalf of the privacy of the unaware parties in a way that they would be automatically identified and warned before such photos go public. For this, we first elaborate on the predominant features encountered in non-consensual captured photos via a thorough user study. Then we establish a dataset for this context and build a classifier as a proactive detector based on multi-deep-feature fusion. To relieve the burden of person-wise unawareness detection, we further design a signature-based filter for local pre-authorization, which can also implicitly avoid classification errors. We implement and test Videre in various field settings to demonstrate its effectiveness and performance.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560571](https://doi.org/10.1145/3548606.3560571)
## Ibex: Privacy-preserving Ad Conversion Tracking and Bidding.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ibex-privacy-preserving-ad-conversion-tracking-and-bidding)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ibex-privacy-preserving-ad-conversion-tracking-and-bidding)
### Authors
* Ke Zhong, University of Pennsylvania, Philadelphia, PA, USA
* Yiping Ma, University of Pennsylvania, Philadelphia, PA, USA
* Sebastian Angel, University of Pennsylvania & Microsoft Research, Philadelphia, PA, USA
### Abstract
> This paper introduces Ibex, an advertising system that reduces the amount of data that is collected on users while still allowing advertisers to bid on real-time ad auctions and measure the effectiveness of their ad campaigns. Specifically, Ibex addresses an issue in recent proposals such as Google's Privacy Sandbox Topics API in which browsers send information about topics that are of interest to a user to advertisers and demand-side platforms (DSPs). DSPs use this information to (1) determine how much to bid on the auction for a user who is interested in particular topics, and (2) measure how well their ad campaign does for a given audience (i.e., measure conversions). While Topics and related proposals reduce the amount of user information that is exposed, they still reveal user preferences. In Ibex, browsers send user information in an encrypted form that still allows DSPs and advertisers to measure conversions, compute aggregate statistics such as histograms about users and their interests, and obliviously bid on auctions without learning for whom they are bidding. Our implementation of Ibex shows that creating histograms is 1.-2.5× more expensive for browsers than disclosing user information, and Ibex's oblivious bidding protocol can finish auctions within 550 ms. We think this makes Ibex capable of preserving a good experience while improving user privacy.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560651](https://doi.org/10.1145/3548606.3560651)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560651](https://dl.acm.org/doi/pdf/10.1145/3548606.3560651)
## Uncovering Intent based Leak of Sensitive Data in Android Framework.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#uncovering-intent-based-leak-of-sensitive-data-in-android-framework)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#uncovering-intent-based-leak-of-sensitive-data-in-android-framework)
### Authors
* Hao Zhou, The Hong Kong Polytechnic University, Hong Kong, China
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, China
* Haoyu Wang, Huazhong University of Science and Technology, Wu Han, China
* Haipeng Cai, Washington State University, Pullman, Pullman, WA, USA
### Abstract
> To prevent unauthorized apps from retrieving the sensitive data, Android framework enforces a permission based access control. However, it has long been known that, to bypass the access control, unauthorized apps can intercept the Intent objects which are sent by authorized apps and carry the retrieved sensitive data. We find that there is a new (previously unknown) attack surface in Android framework that can be exploited by unauthorized apps to violate the access control. Specifically, we discover that part of Intent objects that are sent by Android framework and carry sensitive data can be received by unauthorized apps, resulting in the leak of sensitive data. In this paper, we conduct the first systematic investigation on the new attack surface namely the Intent based leak of sensitive data in Android framework. To automatically uncover such kind of vulnerability in Android framework, we design and develop a new tool named LeakDetector, which finds the Intent objects sent by Android framework that can be received by unauthorized apps and carry the sensitive data. Applying LeakDetector to 10 commercial Android systems, we find that it can effectively uncover the Intent based leak of sensitive data in Android framework. Specifically, we discover 36 exploitable cases of such kind of data leak, which can be abused by unauthorized apps to steal the sensitive data, violating the access control. At the time of writing, 16 of them have been confirmed by Google, Samsung, and Xiaomi, and we received bug bounty rewards from these mobile vendors.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560601](https://doi.org/10.1145/3548606.3560601)
## Non-Distinguishable Inconsistencies as a Deterministic Oracle for Detecting Security Bugs.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#non-distinguishable-inconsistencies-as-a-deterministic-oracle-for-detecting-security-bugs)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#non-distinguishable-inconsistencies-as-a-deterministic-oracle-for-detecting-security-bugs)
### Authors
* Qingyang Zhou, University of Minnesota, Minneapolis, MN, USA
* Qiushi Wu, University of Minnesota, Minneapolis, MN, USA
* Dinghao Liu, Zhejiang University, Hangzhou, China
* Shouling Ji, Zhejiang University, Hangzhou, China
* Kangjie Lu, University of Minnesota, Minneapolis, MN, USA
### Abstract
> Security bugs like memory errors are constantly introduced to software programs, and recent years have witnessed an increasing number of reported security bugs. Traditional detection approaches are mainly specification-based---detecting violations against a specified rule as security bugs. This often does not work well in practice because specifications are difficult to specify and generalize, leaving complicated and new types of bugs undetected. Recent research thus leans toward deviation-based detection which finds a substantial number of similar cases and detects deviating cases as potential bugs. This, however, suffers from two other problems. First, it requires enough similar cases to find deviations and thus cannot work for custom code that does not have similar cases. Second, code-similarity analysis is probabilistic and challenging, so the detection can be unreliable. Sometimes, similar cases can normally have deviating behaviors under different contexts. In this paper, we propose a novel approach for detecting security bugs based on a new concept called Non-Distinguishable Inconsistencies (NDI). The insight is that if two code paths in a function exhibit inconsistent security states (such as being freed or initialized) that are non-distinguishable from the external, such as the callers, there is no way to recover from the inconsistency from the external, which results in a bug. Such an approach has several strengths. First, it is specification-free and thus can support complicated and new types of bugs. Second, it does not require similar cases and by its nature is deterministic. Third, the analysis is practical by minimizing complicated and lengthy data-flow analysis. We implemented NDI and applied it to well-tested programs, including the OpenSSL library, the FreeBSD kernel, the Apache httpd server, and the PHP interpreter. The results show that NDI works for both large and small programs, and it effectively found 51 new bugs, most of which are otherwise missed by the state-of-the-art detection tools.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560661](https://doi.org/10.1145/3548606.3560661)
## What Your Firmware Tells You Is Not How You Should Emulate It: A Specification-Guided Approach for Firmware Emulation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#what-your-firmware-tells-you-is-not-how-you-should-emulate-it-a-specification-guided-approach-for-firmware-emulation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#what-your-firmware-tells-you-is-not-how-you-should-emulate-it-a-specification-guided-approach-for-firmware-emulation)
### Authors
* Wei Zhou, School of Cyber Science and Engineering, Huazhong University of Science and Technology, Beijing, China
* Lan Zhang, College of Information Sciences and Technology, The Pennsylvania State University, state college, PA, USA
* Le Guan, School of Computing, University of Georgia, Athens, GA, USA
* Peng Liu, College of Information Sciences and Technology, The Pennsylvania State University, state college, PA, USA
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Emulating firmware of microcontrollers is challenging due to the lack of peripheral models. Existing work finds out how to respond to peripheral read operations by analyzing the target firmware. This is problematic because the firmware sometimes does not contain enough clues to support the emulation or even contains misleading information (e.g., a buggy firmware). In this work, we propose a new approach that builds peripheral models from the peripheral specification. Using NLP, we translate peripheral behaviors in human language (documented in chip manuals) into a set of structured condition-action rules. By checking, executing, and chaining them at run time, we can dynamically synthesize a peripheral model for each firmware execution. The extracted condition-action rules might not be complete or even be wrong. We, therefore, propose incorporating symbolic execution to quickly pinpoint the root cause. This assists us in the manual correction of the problematic rules. We have implemented our idea for five popular MCU boards spanning three different chip vendors. Using a new edit-distance-based algorithm to calculate trace differences, our evaluation against a large firmware corpus confirmed that our prototype achieves much higher fidelity compared with state-of-the-art solutions. Benefiting from the accurate emulation, our emulator effectively avoids false positives observed in existing fuzzing work. We also designed a new dynamic analysis method to perform driver code compliance checks against the specification. We found some non-compliance which we later confirmed to be bugs caused by race conditions.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3559386](https://doi.org/10.1145/3548606.3559386)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3559386](https://dl.acm.org/doi/pdf/10.1145/3548606.3559386)
## Perils and Mitigation of Security Risks of Cooperation in Mobile-as-a-Gateway IoT.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#perils-and-mitigation-of-security-risks-of-cooperation-in-mobile-as-a-gateway-iot)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#perils-and-mitigation-of-security-risks-of-cooperation-in-mobile-as-a-gateway-iot)
### Authors
* Xin'an Zhou, University of California, Riverside, Riverside, CA, USA
* Jiale Guan, Indiana University Bloomington, Bloomington, IN, USA
* Luyi Xing, Indiana University Bloomington, Bloomington, IN, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
### Abstract
> Mobile-as-a-Gateway (MaaG) is a popular feature using mobile devices as gateways to connect IoT devices to cloud services for management. MaaG IoT access control systems support remote access sharing/revocation while allowing "offline availability'' for better usability. Realizing these functionalities requires secure cooperation among the cloud service, the companion app, and the IoT device. For practical considerations, we find that almost all cloud services perform access model translation (AMT) to translate expressive cloud-side access policies to simple device-side policies. During the process, ad-hoc protocols are developed to support the access policy synchronization. Unfortunately, current MaaG IoT systems fail to recognize the security risks in the process of access model translation and synchronization. We analyze ten top-of-the-line MaaG IoT devices and find that all of them have serious vulnerabilities, e.g., allowing irrevocable and permanent access for temporary users. We further propose a secure protocol design that defends against all identified attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560590](https://doi.org/10.1145/3548606.3560590)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560590](https://dl.acm.org/doi/pdf/10.1145/3548606.3560590)
## Poster: Backdoor Attacks on Spiking NNs and Neuromorphic Datasets.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-backdoor-attacks-on-spiking-nns-and-neuromorphic-datasets)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-backdoor-attacks-on-spiking-nns-and-neuromorphic-datasets)
### Authors
* Gorka Abad, Radboud University & Ikerlan Technology Research Centre, Nijmegen, Netherlands
* Oguzhan Ersoy, Radboud University, Nijmegen, Netherlands
* Stjepan Picek, Radboud University, Nijmegen, Netherlands
* Víctor Julio Ramírez-Durán, Ikerlan Technology Research Centre, Arrasate-Mondragón, Spain
* Aitor Urbieta, Ikerlan Technology Research Centre, Arrasate-Mondragón, Spain
### Abstract
> Neural networks provide state-of-the-art results in many domains. Yet, they often require high energy and time-consuming training processes. Therefore, the research community is exploring alternative, energy-efficient approaches likespiking neural networks (SNNs). SNNs mimic brain neurons by encoding data into sparse spikes, resulting in energy-efficient computing. To exploit the properties of the SNNs, they can be trained with neuromorphic datasets that capture the differences in motion. SNNs, just like any neural network model, can be susceptible to security threats that make the model perform anomalously. One of the most crucial threats is the backdoor attacks that modify the training set to inject a trigger in some samples. After training, the neural network will perform correctly on the main task. However, under the presence of the trigger (backdoor) on an input sample, the attacker can control its behavior. The existing works on backdoor attacks consider standard datasets and not neuromorphic ones. In this paper, to the best of our knowledge, we present the first backdoor attacks on neuromorphic datasets. Due to the structure of neuromorphic datasets, we utilize two different triggers, i.e., static andmoving triggers. We then evaluate the performance of our backdoor using spiking neural networks, achieving top accuracy on both main and backdoor tasks, up to 99%.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563532](https://doi.org/10.1145/3548606.3563532)
## Poster: Correctness of n-parties ECDSA By the Claim of Byzantine Agreement.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-correctness-of-n-parties-ecdsa-by-the-claim-of-byzantine-agreement)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-correctness-of-n-parties-ecdsa-by-the-claim-of-byzantine-agreement)
### Authors
* Akshit Aggarwal, Indian Institute of Information Technology, Guwahati, Guwahati, India
* Srinibas Swain, Indian Institute of Information Technology, Guwahati, Guwahati, India
### Abstract
> ECDSA is widely used in transport layer security, cryptocurrency, and more. The problem of securely computing ECDSA has received considerable interest. Literature suggests that there is no n-parties ECDSA which shows the property of correctness (where correctness means when any party forgets to send the message to another party, and still the system provides the correct output). In this poster, we proposed a novel approach for achieving n-parties ECDSA with correctness using the claim of Byzantine agreement. We present our work by using the existing work of Xue et al. [1] for signature generation. Later on, we applied the Byzantine agreement. Our work easily deals with the case when any party does not send the message to another party.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563546](https://doi.org/10.1145/3548606.3563546)
## Poster: Ontology Enabled Chatbot for Applying Privacy by Design in IoT Systems.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-ontology-enabled-chatbot-for-applying-privacy-by-design-in-iot-systems)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-ontology-enabled-chatbot-for-applying-privacy-by-design-in-iot-systems)
### Authors
* Lamya Alkhariji, Cardiff University, Cardiff, United Kingdom
* Suparna De, University of Surrey, Surrey, United Kingdom
* Omer Rana, Cardiff University, Cardiff, United Kingdom
* Charity Perera, Cardiff University, Cardiff, United Kingdom
### Abstract
> Our aim is to create a personal assistant, a chatbot, that can answer queries from software developers regarding Privacy by Design (PbD) methods and applications throughout the design phase of IoT system development. We used semantic web technologies to model the PARROT Ontology that includes knowledge underlying PbD measurements, their intersections with privacy patterns, IoT system needs, and the privacy patterns that should be applied across IoT systems. To determine the PARROT ontology's requirements, a collection of real-world IoT use cases were aided by a series of workshops to gather Competency Questions (CQs) from researchers and software engineers, resulting in 81 selected CQs. In a user study, the PARROT ontology was able to answer up to 58% of software developers' privacy-related issues. The technical report \citeorca149337 contains further analysis and results from data collecting and intermediate synthesis steps.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563504](https://doi.org/10.1145/3548606.3563504)
## Poster: A Post-Quantum Oblivious PRF from Isogenies.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-post-quantum-oblivious-prf-from-isogenies)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-post-quantum-oblivious-prf-from-isogenies)
### Authors
* Andrea Basso, University of Birmingham, Birmingham, United Kingdom
### Abstract
> At Asiacrypt 2020, Boneh et al. proposed a verifiable oblivious pseudorandom function based on isogenies. Basso et al. later demonstrated a subexponential attack on the pseudorandomness of the protocol. In this work, we propose an efficient countermeasure against such an attack. We also propose several improvements that significantly reduce the computational and communication cost of the protocol. We introduce some countermeasures that make the protocol secure against the recent SIDH attacks. Putting everything together, we obtain the most efficient post-quantum OPRF protocol.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563542](https://doi.org/10.1145/3548606.3563542)
## Poster: Efficient Three-Party Shuffling Using Precomputation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-efficient-three-party-shuffling-using-precomputation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-efficient-three-party-shuffling-using-precomputation)
### Authors
* Andreas Brüggemann, Technical University of Darmstadt, Darmstadt, Germany
* Thomas Schneider, Technical University of Darmstadt, Darmstadt, Germany
* Ajith Suresh, Technical University of Darmstadt, Darmstadt, Germany
* Hossein Yalame, Technical University of Darmstadt, Darmstadt, Germany
### Abstract
> In this paper, we revisit the problem of secure shuffling in a three-server setting with an honest majority. We begin with the recent work of Araki. et al. (CCS'21) and use precomputation to improve the communication and round complexity of the online phase of their shuffle protocol. Our simple yet effective shuffling method is not limited to three parties and can be used in a variety of situations. Furthermore, the design of our solution allows for fine tuning to achieve improved efficiency based on the underlying application's parameters. Our protocols are initially presented with semi-honest security and then extended to support malicious corruption.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563511](https://doi.org/10.1145/3548606.3563511)
## Poster: Data Recovery from Ransomware Attacks via File System Forensics and Flash Translation Layer Data Extraction.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-data-recovery-from-ransomware-attacks-via-file-system-forensics-and-flash-translation-layer-data-extraction)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-data-recovery-from-ransomware-attacks-via-file-system-forensics-and-flash-translation-layer-data-extraction)
### Authors
* Niusen Chen, Michigan Technological University, Houghton, MI, USA
* Josh Dafoe, Michigan Technological University, Houghton, MI, USA
* Bo Chen, Michigan Technological University, Houghton, ME, USA
### Abstract
> Ransomware is increasingly prevalent in recent years. To defend against ransomware in computing devices using flash memory as external storage, existing designs extract the entire raw flash memory data to restore the external storage to a good state. However, they cannot allow a fine-grained recovery in terms of user files as raw flash memory data do not have the semantics of "files''. In this work, we design FFRecovery, a new ransomware defense strategy that can support fine-grained data recovery after the attacks. Our key idea is, to recover a file corrupted by the ransomware, we can 1) restore its file system metadata via file system forensics, and 2) extract its file data via raw data extraction from the flash translation layer, and 3) assemble the corresponding file system metadata and the file data. A simple prototype of FFRecovery has been developed and some preliminary results are provided.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563538](https://doi.org/10.1145/3548606.3563538)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563538](https://dl.acm.org/doi/pdf/10.1145/3548606.3563538)
## Poster: Inaudible Acoustic Noise from Silicon Capacitors for Voice-Command Injection.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-inaudible-acoustic-noise-from-silicon-capacitors-for-voice-command-injection)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-inaudible-acoustic-noise-from-silicon-capacitors-for-voice-command-injection)
### Authors
* Kohei Doi, The University of Electro-Communications, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> Multi-layer ceramic capacitors (MLCCs), commonly used in electronics products, can generate acoustic noise driven by electrical deviation. Such acoustic noise has been exploited to attack systems' security. In particular, CapSpeaker silently delivers voice commands to voice-controllable systems using inaudible acoustic noise and intermodulation distortion (IMD). Silicon capacitor is an emerging technology that achieves a larger capacitance with a smaller footprint fabricated with semiconductor manufacturing processes using different structures and materials. Do silicon capacitors still generate acoustic noise despite the differences? We positively answer the question by experimentally showing that an off-the-shelf silicon capacitor generates audible acoustic noise through IMD; CapSpeaker is still feasible with the new capacitor

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563526](https://doi.org/10.1145/3548606.3563526)
## Poster: An Analysis of Privacy Features in 'Expert-Approved' Kids' Apps.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-an-analysis-of-privacy-features-in-expert-approved-kids-apps)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-an-analysis-of-privacy-features-in-expert-approved-kids-apps)
### Authors
* Anirudh Ekambaranathan, University of Oxford, Oxford, United Kingdom
* Jun Zhao, University of Oxford, Oxford, United Kingdom
* Max Van Kleek, University of Oxford, Oxford, United Kingdom
### Abstract
> During the course of the past decade, children have become avid consumers of digital media through mobile devices. The industry for children's mobile applications is booming and marketplaces offer categories of apps aimed specifically at children. In this study, we perform a mixed-methods privacy analysis of 137 'expert-approved' children's apps from the Google Play Store. Our findings show that these apps do not sufficiently support children to exercise their privacy rights, whilst simultaneously making use of libraries and data trackers which may collect and share sensitive user data.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563549](https://doi.org/10.1145/3548606.3563549)
## Poster: A Systems Approach to GDPR Compliance-by-Design in Web Development Stacks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-systems-approach-to-gdpr-compliance-by-design-in-web-development-stacks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-systems-approach-to-gdpr-compliance-by-design-in-web-development-stacks)
### Authors
* Mafalda Ferreira, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Tiago Brito, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* José Fragoso Santos, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Nuno Santos, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
### Abstract
> Pressured by existing regulations such as the EU GDPR, online services must advertise a personal data protection policy declaring the types and purposes of collected personal data, which must then be strictly enforced as per the consent decisions made by the users. However, due to the lack of system-level support, obtaining strong guarantees of policy enforcement is hard, leaving the door open for software bugs and vulnerabilities to cause GDPR-compliance violations. We present ongoing work on building a GDPR-aware personal data policy compliance system for web development frameworks. Currently prototyped for the MERN framework, our system allows web developers to specify a GDPR manifest from which the data protection policy of the web application is automatically generated and is transparently enforced through static code analysis and runtime access control mechanisms. GDPR compliance is checked in a cross-cutting manner requiring few changes to the application code. We evaluate our prototype with four real-world applications. Our system can model realistic GDPR data protection requirements, adds modest performance overheads to the web application, and can detect GDPR violation bugs.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563521](https://doi.org/10.1145/3548606.3563521)
## Poster: Privacy-Preserving Epidemiological Modeling on Mobile Graphs.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-privacy-preserving-epidemiological-modeling-on-mobile-graphs)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-privacy-preserving-epidemiological-modeling-on-mobile-graphs)
### Authors
* Daniel Günther, Technical University of Darmstadt, Darmstadt, Germany
* Marco Holz, Technical University of Darmstadt, Darmstadt, Germany
* Benjamin Judkewitz, Charité-Universitätsmedizin, Berlin, Germany
* Helen Möllering, Technical University of Darmstadt, Darmstadt, Germany
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Thomas Schneider, Technical University of Darmstadt, Darmstadt, Germany
* Ajith Suresh, Technical University of Darmstadt, Darmstadt, Germany
### Abstract
> Over the last two years, governments all over the world have used a variety of containment measures to control the spread of \covid, such as contact tracing, social distance regulations, and curfews. Epidemiological simulations are commonly used to assess the impact of those policies before they are implemented in actuality. Unfortunately, their predictive accuracy is hampered by the scarcity of relevant empirical data, concretely detailed social contact graphs. As this data is inherently privacy-critical, there is an urgent need for a method to perform powerful epidemiological simulations on real-world contact graphs without disclosing sensitive information.  In this work, we present RIPPLE, a privacy-preserving epidemiological modeling framework that enables the execution of a wide range of standard epidemiological models for any infectious disease on a population's most recent real contact graph while keeping all contact information private locally on the participants' devices. Our theoretical constructs are supported by a proof-of-concept implementation in which we show that a 2-week simulation over a population of half a million can be finished in 7 minutes with each participant consuming less than 50 KB of data.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563497](https://doi.org/10.1145/3548606.3563497)
## Poster EveGAN: Using Generative Deep Learning for Cryptanalysis.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-evegan-using-generative-deep-learning-for-cryptanalysis)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-evegan-using-generative-deep-learning-for-cryptanalysis)
### Authors
* Roger A. Hallman, Dartmouth College & Naval Information Warfare Center (NIWC) Pacific, San Diego, CA, USA
### Abstract
> Cryptography and Machine Learning are two computational science fields that intuitively seem related. Privacy-preserving machine learning-either utilizing encrypted models or learning over encrypted data-is an exploding field thanks to the maturation of primitives such as fully homomorphic encryption and secure multiparty computation. However there has been surprisingly little work on applying recent advances in machine learning to the task of cryptanalysis, the branch of cryptography that studies how cryptographic ciphers can be attacked. In particular, while a cryptographic cipher seeks to keep certain information secret by making it appear random, discerning patterns and structure from random data is a common machine learning task. This paper proposes EveGAN, an approach that treats cryptanalysis as a language translation problem. While treating cipher cracking as a language translation problem has been validated against a handful of classical substitution ciphers, the EveGAN approach builds on these results to create a new class of generative deep learning-based cryptanalysis attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563493](https://doi.org/10.1145/3548606.3563493)
## Poster: A Novel Formal Threat Analyzer for Activity Monitoring-based Smart Home Heating, Ventilation, and Cooling Control System.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-novel-formal-threat-analyzer-for-activity-monitoring-based-smart-home-heating-ventilation-and-cooling-control-system)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-novel-formal-threat-analyzer-for-activity-monitoring-based-smart-home-heating-ventilation-and-cooling-control-system)
### Authors
* Nur Imtiazul Haque, Florida International University, Miami, FL, USA
* Maurice Ngouen, Florida International University, Miami, FL, USA
* Yazen Al-Wahadneh, Florida International University, Miami, FL, USA
* Mohammad Ashiqur Rahman, Florida International University, Miami, FL, USA
### Abstract
> Contemporary home control systems determine real-time heating/cooling demands utilizing smart sensor devices, giving rise to demand control heating, ventilation, and cooling (DCHVAC) systems, thus improving the home's energy efficiency. The adoption of activity monitoring in the smart home control system further augments the controller efficiency and improves occupants' comfort and productivity, elderly monitoring, and so forth. Additionally, the learned occupants' activity patterns help embed machine learning (ML)-based abnormality detection capability to track inconsistencies among the zone sensor measurements. Hence, the incorporation of an activity monitoring system assists anomaly detection models (ADMs) in detecting false data injection (FDI) attacks that are being glowingly researched due to their massive damage capability. However, in this work, we propose a novel attack strategy that identified that the knowledge of occupants' activities along with indoor air quality (IAQ) and occupancy sensor measurements allows the attackers to launch even more hazardous attack (i.e., significant increment in energy cost/ worsening health conditions for the occupants). Hence, it is crucial to analyze the security of the activity monitoring-based smart home DCHVAC system. Accordingly, we propose a novel formal threat analyzer that analyzes the threat space of the smart home DCHVAC control system, which is modeled by rule-based control policies and ML-based ADMs. The rules from the ADM are extracted through an efficient algorithm. The constraints associated with the rules are solved through a satisfiability module theorem (SMT)-based solver. %We performed our initial evaluation of the proposed threat analyzer's effectiveness on the Center of Advanced Studies in Adaptive Systems (CASAS) dataset using some metrics. We will further experiment with other metrics along experimenting with our collaborator's dataset (KTH live-in lab) and open-source Örebro datasets for assessing the framework with realistic occupants' activity. Moreover, we also created our prototype testbed for evaluating the feasibility of the proposed attack and threat analyzer.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563547](https://doi.org/10.1145/3548606.3563547)
## Poster: The Unintended Consequences of Algorithm Agility in DNSSEC.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-the-unintended-consequences-of-algorithm-agility-in-dnssec)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-the-unintended-consequences-of-algorithm-agility-in-dnssec)
### Authors
* Elias Heftrig, ATHENE & Fraunhofer SIT, Darmstadt, Germany
* Haya Shulman, ATHENE, Fraunhofer SIT & Goethe-Universität Frankfurt, Darmstadt & Frankfurt am Main, Germany
* Michael Waidner, ATHENE, Fraunhofer SIT & TU Darmstadt, Darmstadt, Germany
### Abstract
> Cryptographic algorithm agility is an important property for DNSSEC: it allows easy deployment of new algorithms if the existing ones are no longer secure. In this work we show that the cryptographic agility in DNSSEC, although critical for provisioning DNS with strong cryptography, also introduces a vulnerability. We find that under certain conditions, when new algorithms are listed in signed DNS responses, the resolvers do not validate DNSSEC. As a result, domains that deploy new ciphers may in fact cause the resolvers not to validate DNSSEC. We exploit this to develop DNSSEC-downgrade attacks and experimentally and ethically evaluate them against popular DNS resolver implementations, public DNS providers, and DNS services used by web clients worldwide. We find that major DNS providers as well as 45% of DNS resolvers used by web clients are vulnerable to our attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563517](https://doi.org/10.1145/3548606.3563517)
## Poster: MSILDiffer - A Security Patch Analysis Framework Based on Microsoft Intermediate Language for Large Software.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-msildiffer-a-security-patch-analysis-framework-based-on-microsoft-intermediate-language-for-large-software)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-msildiffer-a-security-patch-analysis-framework-based-on-microsoft-intermediate-language-for-large-software)
### Authors
* Can Huang, Peking University, Beijing, China
* Cheng Li, Peking University, Beijing, China
* Jiashuo Liang, Peking University, Beijing, China
* Xinhui Han, Peking University, Beijing, China
### Abstract
> In this poster, we proposed a .NET patch analysis framework named MSILDiffer based on Microsoft Intermediate Language (MSIL). First, MSILDiffer directly extracts MSIL instructions from the .NET assemblies, and retrieves the hierarchy of classes as well as their internal class methods. Then, with coarse and fine granularity feature extraction and comparison, MSILDiffer quickly filters out the code with substantial changes after patch. Besides, we build a dataset of patch analysis containing 24.46 million class methods based on the Microsoft Exchange mail system security patches. With the assistance of MSILDiffer, we generated 32 call paths and crafted corresponding POCs for 1-day vulnerabilities in the dataset. Through the experiment evaluation, MSILDiffer is superior to JustAssembly in terms of coverage, accuracy and time consumption of patch difference analysis.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563518](https://doi.org/10.1145/3548606.3563518)
## Poster: Vogue: Faster Computation of Private Heavy Hitters.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-vogue-faster-computation-of-private-heavy-hitters)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-vogue-faster-computation-of-private-heavy-hitters)
### Authors
* Pranav Jangir, Indian Institute of Science, Bangalore, India
* Nishat Koti, Indian Institute of Science, Bangalore, India
* Varsha Bhat Kukkala, Indian Institute of Science, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Bhavish Raj Gopal, Indian Institute of Science, Bangalore, India
* Somya Sangal, Indian Institute of Science, Bangalore, India
### Abstract
> Consider a set of N clients, each of which holds a private input string. An input string that is held by at least τ clients is defined as a τ-heavy hitter. In various application scenarios, data-aggregation servers are interested in learning τ-heavy hitters. To ensure that the servers do not learn anything about client input in the process, the problem of identifying heavy hitters privately is gaining popularity. Towards this, we design a novel system called Vogue, which provides improved efficiency as well as security guarantees over the state-of-the-art system of Poplar. Concretely, Vogue provides up to 27x efficiency improvement over Poplar when considering 400,000 clients who hold 256-bit input strings. Moreover, Vogue overcomes intermediate information leakages present in Poplar and guarantees full security in the presence of a malicious adversary. In the process of designing Vogue, we also design secure and efficient protocols for stable compaction and shuffle, each of which improves over its respective state-of-the-art.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563544](https://doi.org/10.1145/3548606.3563544)
## Poster: Coded Broadcast for Scalable Leader-Based BFT Consensus.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-coded-broadcast-for-scalable-leader-based-bft-consensus)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-coded-broadcast-for-scalable-leader-based-bft-consensus)
### Authors
* Ioannis Kaklamanis, Massachusetts Institute of Technology, Cambridge, MA, USA
* Lei Yang, Massachusetts Institute of Technology, Cambridge, MA, USA
* Mohammad Alizadeh, Massachusetts Institute of Technology, Cambridge, MA, USA
### Abstract
> With the success of blockchains and cryptocurrencies, Byzantine Fault Tolerant state machine replication protocols have attracted considerable interest. A class of such protocols that is particularly popular are leader-based protocols, where one server (the leader) is tasked with proposing and broadcasting blocks of new data to be applied to the state machine. Simple implementation of the broadcast requires the leader to send entire blocks to all other servers, creating a network bottleneck at the leader and reducing the system throughput as the number of servers scales. We demonstrate this effect by benchmarking HotStuff, a popular leader-based protocol, and then propose a mitigation based on coding. The key idea is to let the leader encode the block into small chunks, and task each server with broadcasting a chunk, thus utilizing the bandwidth of all servers during the process. We apply this idea on HotStuff, and demonstrate a 64% improvement in throughput in a deployment across 9 servers.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563494](https://doi.org/10.1145/3548606.3563494)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563494](https://dl.acm.org/doi/pdf/10.1145/3548606.3563494)
## Poster MPClan: : Protocol Suite for Privacy-Conscious Computations.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-mpclan-protocol-suite-for-privacy-conscious-computations)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-mpclan-protocol-suite-for-privacy-conscious-computations)
### Authors
* Nishat Koti, Indian Institute of Science, Bangalore, India
* Shravani Patil, Indian Institute of Science, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Ajith Suresh, Technical University of Darmstadt, Darmstadt, Germany
### Abstract
> The growing volumes of data collected and its analysis to provide better services create worries about digital privacy. The literature has relied on secure multiparty computation techniques to address privacy concerns and give practical solutions. However, recent research has mostly focused on the small-party honest-majority setting of up to four parties, noting efficiency concerns. In this work, we extend the strategies to support a larger number of participants in honest-majority setting with efficiency at the center stage. Designed in the preprocessing paradigm, our semi-honest protocol improves the online complexity of the decade-old state-of-the-art protocol of Damgård and Nielson (CRYPTO'07). In addition to having an improved online communication cost, we can shut down almost half of the parties in the online phase, thereby saving up to 50% in the system's operational costs. Our maliciously secure protocol also enjoys similar benefits and requires only half of the parties, except for a one-time verification, towards the end. We benchmark popular applications such as deep neural networks, graph neural networks and genome sequence matching using prototype implementations to showcase the practicality of the designed protocols. Our improved protocols aid in bringing up to 60-80% savings in monetary cost over prior work.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563496](https://doi.org/10.1145/3548606.3563496)
## Poster: Patient Community - A Test Bed for Privacy Threat Analysis.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-patient-community-a-test-bed-for-privacy-threat-analysis)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-patient-community-a-test-bed-for-privacy-threat-analysis)
### Authors
* Immanuel Kunz, Fraunhofer AISEC, Garching b. München, Germany
* Angelika Schneider, Fraunhofer AISEC, Garching b. München, Germany
* Christian Banse, Fraunhofer AISEC, Garching b. München, Germany
* Konrad Weiss, Fraunhofer AISEC, Garching b. München, Germany
* Andreas Binder, Fraunhofer AISEC, Garching b. München, Germany
### Abstract
> Research and development of privacy analysis tools currently suffers from a lack of test beds for evaluation and comparison of such tools. In this work, we propose a benchmark application that implements an extensive list of privacy weaknesses based on the LINDDUN methodology. It represents a social network for patients whose architecture has first been described in an example analysis conducted by one of the LINDDUN authors. We have implemented this architecture and extended it with more privacy threats to build a test bed that enables comprehensive and independent testing of analysis tools.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3564253](https://doi.org/10.1145/3548606.3564253)
## Poster: Adversarial Perturbation Attacks on the State-of-the-Art Cryptojacking Detection System in IoT Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-adversarial-perturbation-attacks-on-the-state-of-the-art-cryptojacking-detection-system-in-iot-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-adversarial-perturbation-attacks-on-the-state-of-the-art-cryptojacking-detection-system-in-iot-networks)
### Authors
* Kiho Lee, Sungkyunkwan University, Suwon, Republic of Korea
* Sanghak Oh, Sungkyunkwan University, Suwon, Republic of Korea
* Hyoungshick Kim, Sungkyunkwan University, Suwon, Republic of Korea
### Abstract
> The popularity of cryptocurrency raised a new cyber security threat dubbed cryptojacking representing malicious activities for abusing victims' computing resources without their consent to mine cryptocurrency. Recently, Tekiner et al. [1] proposed an effective cryptojacking detection technique using a machine learning model with the statistical properties of the network traffic for cryptojacking in the Internet of Things (IoT) devices. In this paper, however, we demonstrate that this state-of-the-art method can effectively be evaded by maliciously manipulating the network packets for cryptojacking. Our evaluation results show that packet manipulations (packet splitting, dummy packet/payload insertion, and a proxy network) can effectively evade the model's detection -- the packet splitting technique significantly decreased the F1-score of the detection model from 0.93 to 0.30. Finally, the best combination of those packet manipulations can decrease the F1-score of the detection model to 0.21.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563530](https://doi.org/10.1145/3548606.3563530)
## Poster: EOSDFA: Data Flow Analysis of EOSIO Smart Contracts.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-eosdfa-data-flow-analysis-of-eosio-smart-contracts)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-eosdfa-data-flow-analysis-of-eosio-smart-contracts)
### Authors
* Levi Taiji Li, University of Utah, Salt Lake City, UT, USA
* Mu Zhang, University of Utah, Salt Lake City, UT, USA
### Abstract
> As an efficient blockchain platform, EOSIO is becoming increasingly popular. However, it has exposed many security problems and caused a large amount of financial losses. In the past, the difficulty of collecting open-source EOSIO smart contracts and analyzing WebAssembly (Wasm) bytecode compiled by EOSIO smart contracts, making few researchers proposed static analysis tools for EOSIO smart contracts, and tools capable of dataflow analysis have not yet appeared. In this work, we first propose a dataflow analysis method for EOSIO smart contracts. Based on Octopus, we designed an efficient dataflow analysis method, which can generate Static Single Assignment (SSA) form intermediate representation (IR) for the objective function and its variables to obtain the results of dataflow. We further proved the effectiveness of the proposed method through experiments on our collected data sets.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563545](https://doi.org/10.1145/3548606.3563545)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563545](https://dl.acm.org/doi/pdf/10.1145/3548606.3563545)
## Poster: Cryptographic Inferences for Video Deep Neural Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-cryptographic-inferences-for-video-deep-neural-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-cryptographic-inferences-for-video-deep-neural-networks)
### Authors
* Bingyu Liu, Illinois Institute of Technology, Chicago, IL, USA
* Rujia Wang, Illinois Institute of Technology, Chicago, IL, USA
* Zhongjie Ba, Zhejiang University, Hangzhou, China
* Shanglin Zhou, University of Connecticut, Storrs, CT, USA
* Caiwen Ding, University of Connecticut, Storrs, CT, USA
* Yuan Hong, University of Connecticut, Storrs, CT, USA
### Abstract
> Deep neural network (DNN) services have been widely deployed in many different domains. For instance, a client may send its private input data (e.g., images, texts and videos) to the cloud for accurate inferences with pre-trained DNN models. However, significant privacy concerns would emerge in such applications due to the potential data or model sharing. Secure inferences with cryptographic techniques have been proposed to address such issues, and the system can perform secure two-party inferences between each client and cloud. However, most of existing cryptographic systems only focus on DNNs for extracting 2D features for image inferences, which have major limitations on latency and scalability for extracting spatio-temporal (3D) features from videos for accurate inferences. To address such critical deficiencies, we design and implement the first cryptographic inference system, Crypto3D, which privately infers videos on 3D features with rigorous privacy guarantees. We evaluate Crypto3D and benchmark with the state-of-the-art systems on privately inferring videos in the UCF-101 and HMDB-51 datasets with C3D and I3D models. Our results demonstrate that Crypto3D significantly outperforms existing systems (substantially extended to inferences with 3D features): execution time: 186.89x vs. CryptoDL (3D), 63.75x vs. HEANN (3D), 61.52x vs. MP-SPDZ (3D), 45x vs. E2DM (3D), 3.74x vs. Intel SGX (3D), and 3x vs. Gazelle (3D); accuracy: 82.3% vs. below 70% for all of them.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563543](https://doi.org/10.1145/3548606.3563543)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563543](https://dl.acm.org/doi/pdf/10.1145/3548606.3563543)
## Poster: User Sessions on Tor Onion Services: Can Colluding ISPs Deanonymize Them at Scale?
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-user-sessions-on-tor-onion-services-can-colluding-isps-deanonymize-them-at-scale)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-user-sessions-on-tor-onion-services-can-colluding-isps-deanonymize-them-at-scale)
### Authors
* Daniela Lopes, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Pedro Medeiros, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
* Jin-Dong Dong, Carnegie Mellon University, Pittsburgh, PA, Portugal
* Diogo Barradas, University of Waterloo, Waterloo, Portugal
* Bernardo Portela, INESC TEC & Universidade do Porto, Porto, Portugal
* João Vinagre, INESC TEC & Universidade do Porto, Porto, Portugal
* Bernardo Ferreira, LASIGE, Faculdade de Ciências, Universidade de Lisboa, Lisboa, Portugal
* Nicolas Christin, Carnegie Mellon University, Pittsburgh, PA, Portugal
* Nuno Santos, INESC-ID & Instituto Superior Técnico, Universidade de Lisboa, Lisboa, Portugal
### Abstract
> Tor is the most popular anonymity network in the world. It relies on advanced security and obfuscation techniques to ensure the privacy of its users and free access to the Internet. However, the investigation of traffic correlation attacks against Tor Onion Services (OSes) has been relatively overlooked in the literature. In particular, determining whether it is possible to emulate a global passive adversary capable of deanonymizing the IP addresses of both the Tor OSes and of the clients accessing them has remained, so far, an open question. In this paper, we present ongoing work toward addressing this question and reveal some preliminary results on a scalable traffic correlation attack that can potentially be used to deanonymize Tor OS sessions. Our attack is based on a distributed architecture involving a group of colluding ISPs from across the world. After collecting Tor traffic samples at multiple vantage points, ISPs can run them through a pipeline where several stages of traffic classifiers employ complementary techniques that result in the deanonymization of OS sessions with high confidence (i.e., low false positives). We have responsibly disclosed our early results with the Tor Project team and are currently working not only on improving the effectiveness of our attack but also on developing countermeasures to preserve Tor users' privacy.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563520](https://doi.org/10.1145/3548606.3563520)
## Poster: Investigating QUIC's Potential Impact on Censorship Circumvention.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-investigating-quics-potential-impact-on-censorship-circumvention)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-investigating-quics-potential-impact-on-censorship-circumvention)
### Authors
* Anna Harbluk Lorimer, University of Chicago, Chicago, IL, USA
* Nick Feamster, University of Chicago, Chicago, IL, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### Abstract
> Although not yet ubiquitous, censors and censorship-resistors have been eyeing QUIC as the next avenue for censorship-circumvention. In this poster, we highlight three QUIC features that are avenues for potential improvements to both Pluggable Transports and decoy routing: streams, connections identifiers, and congestion control. We also examine how traffic splitting can be used. We then discuss how these features can be integrated into Pluggable Transports and decoy routing. We close with providing guidance for future work on integrating QUIC into Pluggable Transports and decoy routing.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563519](https://doi.org/10.1145/3548606.3563519)
## Poster: CFMAP: A Robust CPU Clock Fingerprint Model for Device Authentication.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-cfmap-a-robust-cpu-clock-fingerprint-model-for-device-authentication)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-cfmap-a-robust-cpu-clock-fingerprint-model-for-device-authentication)
### Authors
* Xiaofeng Lu, Beijing University of Posts and Telecommunications, Beijing, China
* Renyu Pang, Beijing University of Posts and Telecommunications, Beijing, China
* Pietro Lio, University of Cambridge, Cambridge, United Kingdom
### Abstract
> The internal clock of the CPU uses oscillators made from quartz crystals. Small changes in these crystals can cause small but measurable differences in the clock frequency. Under a low CPU load, the function execution time distribution follows the Pareto distribution. However, the function execution time distribution no longer follows the Pareto distribution when the CPU load is high, and the CPU clock fingerprint becomes invalid. In view of this problem, this paper proposes an adaptive Pareto principle that adaptively adjusts the distribution according to the CPU load. Based on this, the robust CPU Clock Fingerprint Model based on the Adaptive Pareto Principle (CFMAP) is proposed. Via a KNN-based fingerprint recognition method, CFMAP solves the instability of existing CPU clock fingerprints under a high CPU load. Experiments show that the average recognition rate of CFMAP fingerprints is 96.82%. Moreover, they are highly robust against CPU load attacks and virtual machine attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563528](https://doi.org/10.1145/3548606.3563528)
## Poster: Towards Complete Computation Graph Generation for Security Assessment of ROS Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-towards-complete-computation-graph-generation-for-security-assessment-of-ros-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-towards-complete-computation-graph-generation-for-security-assessment-of-ros-applications)
### Authors
* Yunpeng Luo, University of California, Irvine, Irvine, CA, USA
* Ziwen Wan, University of California, Irvine, Irvine, CA, USA
* Qi Alfred Chen, University of California, Irvine, Irvine, CA, USA
### Abstract
> Robot Operating System (ROS) is a popular middleware suite providing a set of libraries and tools to help with building robot applications. The ROS community makes it possible for developers to compose their own robot applications by simply integrating open-sourced software of different functionalities as standalone processes (ROS nodes) in their own application. These processes communicate with each other through the infrastructure provided by ROS, forming a graph of nodes called computation graph. However, adopting third-party software introduces the possibility of supply-chain attacks. By interacting with other nodes, the third-party ROS nodes seeming to be the most harmless can violate users' privacy, launch denial of service attacks, and even cause danger to human lives, due to the cyber-physical nature of robot applications. To allow effective security assessment of robot applications, we are the first to propose to explore a hybrid program analysis-based method to extract these interactions, i.e. the computation graph, from source code and identify the potentially malicious nodes within the graph.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563540](https://doi.org/10.1145/3548606.3563540)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563540](https://dl.acm.org/doi/pdf/10.1145/3548606.3563540)
## Poster: Effectiveness of Moving Target Defense Techniques to Disrupt Attacks in the Cloud.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-effectiveness-of-moving-target-defense-techniques-to-disrupt-attacks-in-the-cloud)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-effectiveness-of-moving-target-defense-techniques-to-disrupt-attacks-in-the-cloud)
### Authors
* Salman Manzoor, Lancaster University, Lancaster, United Kingdom
* Antonios Gouglidis, Lancaster University, Lancaster, United Kingdom
* Matthew Bradbury, Lancaster University, Lancaster, United Kingdom
* Neeraj Suri, Lancaster University, Lancaster, United Kingdom
### Abstract
> Moving Target Defense (MTD) can eliminate the asymmetric advantage that attackers have in terms of time to explore a static system by changing a system's configuration dynamically to reduce the efficacy of reconnaissance and increase uncertainty and complexity for attackers. To this extent, a variety of MTDs have been proposed for specific aspects of a system. However, deploying MTDs at different layers/components of the Cloud and assessing their effects on the overall security gains for the entire system is still challenging since the Cloud is a complex system entailing physical and virtual resources, and there exists a multitude of attack surfaces that an attacker can target. Thus, we explore the combination of MTDs, and their deployment at different components (belonging to various operational layers) to maximize the security gains offered by the MTDs.We also propose a quantification mechanism to evaluate the effectiveness of the MTDs against the attacks in the Cloud.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563514](https://doi.org/10.1145/3548606.3563514)
## Poster: Multi-Layer Threat Analysis of the Cloud.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-multi-layer-threat-analysis-of-the-cloud)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-multi-layer-threat-analysis-of-the-cloud)
### Authors
* Salman Manzoor, Lancaster University, Lancaster, United Kingdom
* Antonios Gouglidis, Lancaster University, Lancaster, United Kingdom
* Matthew Bradbury, Lancaster University, Lancaster, United Kingdom
* Neeraj Suri, Lancaster University, Lancaster, United Kingdom
### Abstract
> A variety of Threat Analysis (TA) techniques exist that typically target exploring threats to discrete assets (e.g., services, data, etc.) and reveal potential attacks pertinent to these assets. Furthermore, these techniques assume that the interconnection among the assets is static. However, in the Cloud, resources can instantiate or migrate across physical hosts at run-time, thus making the Cloud a dynamic environment. Additionally, the number of attacks targeting multiple assets/layers emphasizes the need for threat analysis approaches developed for Cloud environments. Therefore, this proposal presents a novel threat analysis approach that specifically addresses multi-layer attacks. The proposed approach facilitates threat analysis by developing a technology-agnostic information flow model. It contributes to exploring a threat's propagation across the operational stack of the Cloud and, consequently, holistically assessing the security of the Cloud.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563515](https://doi.org/10.1145/3548606.3563515)
## Poster: RPKI Kill Switch.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-rpki-kill-switch)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-rpki-kill-switch)
### Authors
* Donika Mirdita, ATHENE, TU Darmstadt & Fraunhofer SIT, Darmstadt, Germany
* Haya Shulman, ATHENE, Goethe-Universität Frankfurt & Fraunhofer SIT, Darmstadt, Germany
* Michael Waidner, ATHENE, TU Darmstadt & Fraunhofer SIT, Darmstadt, Germany
### Abstract
> Relying party implementations are an important component of RPKI: they fetch and validate the signed authorizations mapping prefixes to their owners. Border routers use this information to check which Autonomous Systems (ASes) are authorized to originate given prefixes and to enforce Route Origin Validation (ROV) in order to block bogus BGP announcements, preventing accidental and malicious prefix hijacks. In 2021 the RPKI relying party implementations were patched against attacks by malicious publication points. In such attacks the relying parties are stalled processing malformed RPKI objects. In this work we perform a black-box analysis of the patched relying party implementations and find that out of five popular relying parties, two major implementations (Routinator and OctoRPKI) have vulnerabilities that can be exploited to cause large scale blackouts in the RPKI ecosystem. We show that the vulnerabilities we found apply to 84.9% of the networks supporting RPKI. We analyze the code to understand the factors causing the bugs. We show that these vulnerabilities can be exploited to crash the deployed relying parties, disabling RPKI validation and exposing the networks to prefix hijack attacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563536](https://doi.org/10.1145/3548606.3563536)
## Poster: Physics-Informed Augmentation for Contextual Anomaly Detection in Smart Grid.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-physics-informed-augmentation-for-contextual-anomaly-detection-in-smart-grid)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-physics-informed-augmentation-for-contextual-anomaly-detection-in-smart-grid)
### Authors
* Muhammad Nouman Nafees, Cardiff University, Cardiff, United Kingdom
* Neetesh Saxena, Cardiff University, Cardiff, United Kingdom
* Pete Burnap, Cardiff University, Cardiff, United Kingdom
### Abstract
> Smart Grid (SG) networks, as a part of critical national infrastructure, are vulnerable to sophisticated cyber-physical attacks. Specifically, a coordinated false data injection attack aiming to generate fake transient measurements in the SG's Automatic Generation Control (AGC), can cause unwarranted actions and blackouts in the worst scenario. Unlike other works that overlook contextual correlations, this work utilizes contextual prior information and a temporal model to detect cyber-attacks. Specifically, we depart from the traditional deep learning anomaly detection, driven by black-box detection; instead, we envision an approach based on physics-informed hybrid deep learning detection. Our approach utilizes the combination of process control-based variational autoencoder, prior knowledge of physics, and long short-term memory for a false data injection attack detection. To the best of our knowledge, our method is the first contextual-based anomaly detection that incorporates process control-based prior information in the smart grid. The proposed approach is evaluated on the modified high-class PowerWorld simulated dataset based on the IEEE 37-bus model. Our experiments observe the lowest reconstruction error and offer 96.9% accuracy, demonstrating superiority over other baselines.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563533](https://doi.org/10.1145/3548606.3563533)
## Poster CTI4AI: Threat Intelligence Generation and Sharing after Red Teaming AI Models.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-cti4ai-threat-intelligence-generation-and-sharing-after-red-teaming-ai-models)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-cti4ai-threat-intelligence-generation-and-sharing-after-red-teaming-ai-models)
### Authors
* Chuyen Nguyen, Mississippi State University, Mississippi State, MS, USA
* Caleb Morgan, Mississippi State University, Mississippi State, MS, USA
* Sudip Mittal, Mississippi State University, Mississippi State, MS, USA
### Abstract
> As the practicality of Artificial Intelligence (AI) and Machine Learning (ML) based techniques grow, there is an ever increasing threat of adversarial attacks. There is a need to "red team' this ecosystem to identify system vulnerabilities, potential threats, characterize properties that will enhance system robustness, and encourage the creation of effective defenses. A secondary need is to share this AI security threat intelligence between different stakeholders like, model developers, users, and AI/ML security professionals. In this paper, we create and describe a prototype system CTI4AI, to overcome the need to methodically identify and share AI/ML specific vulnerabilities and threat intelligence.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563525](https://doi.org/10.1145/3548606.3563525)
## Poster - Towards Authorship Obfuscation with Language Models.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-towards-authorship-obfuscation-with-language-models)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-towards-authorship-obfuscation-with-language-models)
### Authors
* Rajvardhan Oak, University of California, Davis, Davis, CA, USA
### Abstract
> Authorship obfuscation is the process of making changes to text such that identifying attributes (style, common words and phrases, tone) are masked. The goal of obfuscation is to retain the semantics of the text (i.e., the meaning) but rewrite it in such a way that the author cannot be identified. In this work, we investigate the effectiveness of language models for authorship obfuscation. More specifically, we examine the application of document summarization (a task where we learn to generate the summary of a text) as an authorship obfuscation method. Since summaries are shorter versions of text but which retain the significant points made in it, we hypothesize that summaries will be stripped off any stylistic identifying features of the text. Our experiments show that this is indeed the case; we were able to fool authorship classifiers and degrade their performance by as much as 70% However, this also significantly affected the semantics; there was a non-trivial loss of information and the produced text was not an accurate representation of the original.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563512](https://doi.org/10.1145/3548606.3563512)
## Poster: Adversarial Defense with Deep Learning Coverage on MagNet's Purification.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-adversarial-defense-with-deep-learning-coverage-on-magnets-purification)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-adversarial-defense-with-deep-learning-coverage-on-magnets-purification)
### Authors
* Leo Hyun Park, Yonsei University, Seoul, Republic of Korea
* Jaewoo Park, Yonsei University, Seoul, Republic of Korea
* Soochang Chung, Yonsei University, Seoul, Republic of Korea
* Jaeuk Kim, Yonsei University, Seoul, Republic of Korea
* Myung Gyo Oh, Yonsei University, Seoul, Republic of Korea
* Taekyoung Kwon, Yonsei University, Seoul, Republic of Korea
### Abstract
> MagNet is a defense method that adopts autoencoders to detect and purify adversarial examples. Although MagNet is robust against grey-box and black-box attacks, it is vulnerable to white-box attacks. Despite this prior knowledge, the fundamental reason for and mitigation of the vulnerability of MagNet have not been discussed. We suggest that the challenge of MagNet is the generalization of the data manifold. To explain this, in this work, we leverage deep learning coverage for the reformer of MagNet. We mutate training images through image transformation algorithms and then train the reformer using mutants with new coverage information. The selected mutants provide an interesting data manifold, that cannot be handled by the random noise of MagNet, to the reformer. In grey-box settings, our defense method classified adversarial examples for various perturbation sizes much more accurately than MagNet even with the same architecture. Based on the preliminary result of this work, we consider future work to identify whether the generalization power of deep learning coverage is effective for stronger adversaries and different architectures.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563550](https://doi.org/10.1145/3548606.3563550)
## Poster: A WiFi Vision-based Approach to Person Re-identification.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-wifi-vision-based-approach-to-person-re-identification)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-a-wifi-vision-based-approach-to-person-re-identification)
### Authors
* Yili Ren, Florida State University, Tallahassee, FL, USA
* Yichao Wang, Florida State University, Tallahassee, FL, USA
* Sheng Tan, Trinity University, San Antonio, TX, USA
* Yingying Chen, Rutgers University, New Brunswick, NJ, USA
* Jie Yang, Florida State University, Tallahassee, FL, USA
### Abstract
> In this work, we propose a WiFi vision-based approach to person re-identification (Re-ID) indoors. Our approach leverages the advances of WiFi to visualize a person and utilizes deep learning to help WiFi devices identify and recognize people. Specifically, we leverage multiple antennas on WiFi devices to estimate the two-dimensional angle of arrival (2D AoA) of the WiFi signal reflections to enable WiFi devices to "see'' a person. We then utilize deep learning techniques to extract a 3D mesh representation of a person and extract the body shape and walking patterns for person Re-ID. Our preliminary study shows that our system achieves high overall ranking accuracies. It also works under non-line-of-sight and different person appearance conditions, where the traditional camera vision-based systems do not work well.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563516](https://doi.org/10.1145/3548606.3563516)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563516](https://dl.acm.org/doi/pdf/10.1145/3548606.3563516)
## Poster: ReMouse Dataset: Measuring Similarity of Human-Generated Trajectories as an Important Step in Dealing with Session-Replay Bots.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-remouse-dataset-measuring-similarity-of-human-generated-trajectories-as-an-important-step-in-dealing-with-session-replay-bots)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-remouse-dataset-measuring-similarity-of-human-generated-trajectories-as-an-important-step-in-dealing-with-session-replay-bots)
### Authors
* Shadi Sadeghpour, York University, Toronto, ON, Canada
* Natalija Vlajic, York University, Toronto, ON, Canada
### Abstract
> Session-replay bots are believed to be the latest and most advanced generation of web-bots, that are also difficult challenging to defend against. Combating session-replay bots is particularly problematic in online domains that get repeatedly visited by the same genuine human user(s), and possibly in the same/similar way - such as news, banking or gaming sites. Namely, in such domains, it is difficult to determine whether two look-alike sessions are produced by the same human user or these sessions are just bot-generated session replays. In this paper we introduce and provide to the public a novel real-world mouse dynamics dataset named ReMouse. ReMouse dataset is collected in a guided environment and, unlike other publicly available mouse dynamics dataset, it contains repeat-sessions generated by the same human user(s). As such, ReMouse dataset is first of its kind and is of particular relevance for studies on the development of effective defenses against session-replay bots. Our own statistical analysis of ReMouse dataset shows that not only two different human users are highly unlikely to generate same/similar looking sessions when performing the same/similar online task, but even the (repeat) sessions generated by the same human user are likely to be sufficiently distinguishable from one another.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563522](https://doi.org/10.1145/3548606.3563522)
## Poster AutoPatch: Automatic Hotpatching of Real-Time Embedded Devices.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-autopatch-automatic-hotpatching-of-real-time-embedded-devices)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-autopatch-automatic-hotpatching-of-real-time-embedded-devices)
### Authors
* Mohsen Salehi, The University of British Columbia, Vancouver, BC, Canada
* Karthik Pattabiraman, The University of British Columbia, Vancouver, BC, Canada
### Abstract
> The number of real-time embedded devices is increasing, especially in critical places such as industrial and medical devices. These devices are the target of many security attacks; therefore, their security must be ensured, and existing vulnerabilities must be fixed immediately. Typical update approaches require rebooting or halting the devices for an unpredictable time, and are hence not applicable for real-time embedded devices such as medical devices, which must run continuously without rebooting. Hotpatching, which patches the code without rebooting the device, has been used in this context. However, existing hotpatching methods require manual effort from programmers that is error-prone and time-consuming. Further, little attention has been paid to these techniques for real-time embedded devices. This paper proposes AutoPatch, the first automatic hotpatching approach for real-time embedded devices. AutoPatch automatically analyzes the official patch to extract its semantics using predicate abstraction, and generates a semantically equivalent patch called hotpatch. Our initial results show that AutoPatch can automatically generate hotpatches correctly based on the official patches (i.e., real-world CVEs) using program analysis. We also validate that the generated hotpatch can fix the vulnerabilities without rebooting or halting the devices.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563534](https://doi.org/10.1145/3548606.3563534)
## Poster: MUSTARD - Adaptive Behavioral Analysis for Ransomware Detection.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-mustard-adaptive-behavioral-analysis-for-ransomware-detection)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-mustard-adaptive-behavioral-analysis-for-ransomware-detection)
### Authors
* Davide Sanvito, NEC Laboratories Europe, Heidelberg, Germany
* Giuseppe Siracusano, NEC Laboratories Europe, Heidelberg, Germany
* Roberto Gonzalez, NEC Laboratories Europe, Heidelberg, Germany
* Roberto Bifulco, NEC Laboratories Europe, Heidelberg, Germany
### Abstract
> Behavioural analysis based on filesystem operations is one of the most promising approaches for the detection of ransomware. Nonetheless, tracking all the operations on all the files for all the processes can introduce a significant overhead on the monitored system. We present MUSTARD, a solution to dynamically adapt the degree of monitoring for each process based on their behaviour to achieve a reduction of monitoring resources for the benign processes.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563529](https://doi.org/10.1145/3548606.3563529)
## Poster: Towards Large-Scale Measurement Study on LiDAR Spoofing Attacks against Object Detection.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-towards-large-scale-measurement-study-on-lidar-spoofing-attacks-against-object-detection)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-towards-large-scale-measurement-study-on-lidar-spoofing-attacks-against-object-detection)
### Authors
* Takami Sato, University of California, Irvine, Irvine, CA, USA
* Yuki Hayakawa, Keio University, Tokyo, Japan
* Ryo Suzuki, Keio University, Tokyo, Japan
* Yohsuke Shiiki, Keio University, Tokyo, Japan
* Kentaro Yoshioka, Keio University, Tokyo, Japan
* Qi Alfred Chen, University of California, Irvine, Irvine, CA, USA
### Abstract
> LiDAR (Light Detection And Ranging) is an indispensable sensor for precise long- and wide-range 3D sensing of the surrounding environment. The recent rapid deployment of autonomous driving (AD) has highly benefited from the advancement of LiDARs. At the same time, the safety-critical application strongly motivates its security research. Recent studies demonstrate that they can manipulate the LiDAR point cloud and fool object detection by shooting malicious lasers against LiDAR scanning. However, prior efforts focus on limited types of LiDARs and object detection models, and their threat models are not clearly validated in the real world. To fill the critical research gap, we plan to conduct the first large-scale measurement study on LiDAR spoofing attacks against a wide variety of LiDARs with major object detectors. To perform this measurement, we first significantly improved the LiDAR spoofing capability (30x more spoofing points than the prior attack) with more careful optics and functional electronics, which allows us to be the first to clearly demonstrate and quantify key attack capabilities assumed in prior works. In this poster, we present our preliminary results on VLP-16 and our research plan.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563537](https://doi.org/10.1145/3548606.3563537)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563537](https://dl.acm.org/doi/pdf/10.1145/3548606.3563537)
## Poster: INSIDE - Enhancing Network Intrusion Detection in Power Grids with Automated Facility Monitoring.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-inside-enhancing-network-intrusion-detection-in-power-grids-with-automated-facility-monitoring)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-inside-enhancing-network-intrusion-detection-in-power-grids-with-automated-facility-monitoring)
### Authors
* Martin Serror, Fraunhofer FKIE, Wachtberg, Germany
* Lennart Bader, Fraunhofer FKIE, Wachtberg, Germany
* Martin Henze, RWTH Aachen University & Fraunhofer FKIE, Aachen, Germany
* Arne Schwarze, Fraunhofer FKIE, Wachtberg, Germany
* Kai Nürnberger, Fraunhofer FKIE, Wachtberg, Germany
### Abstract
> Advances in digitalization and networking of power grids have increased the risks of cyberattacks against such critical infrastructures, where the attacks often originate from within the power grid's network. Adequate detection must hence consider both physical access violations and network anomalies to identify the attack's origin. Therefore, we propose INSIDE, combining network intrusion detection with automated facility monitoring to swiftly detect cyberattacks on power grids based on unauthorized access. Besides providing an initial design for INSIDE, we discuss potential use cases illustrating the benefits of such a comprehensive methodology.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563500](https://doi.org/10.1145/3548606.3563500)
## Poster: Insights into Global Deployment of RPKI Validation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-insights-into-global-deployment-of-rpki-validation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-insights-into-global-deployment-of-rpki-validation)
### Authors
* Haya Shulman, ATHENE, Goethe-Universität Frankfurt, & Fraunhofer SIT, Damrstadt, Germany
* Niklas Vogel, ATHENE, TU Darmstadt, & Fraunhofer SIT, Darmstadt, Germany
* Michael Waidner, ATHENE, TU Darmstadt, & Fraunhofer SIT, Darmstadt, Germany
### Abstract
> IP prefix hijacks, due to malicious attacks or benign misconfigurations, pose a threat to the Internet's stability and security. RPKI was designed to enable networks to block prefix hijacks by enforcing Route Origin Validation (ROV). In this work we evaluate the effectiveness of the global ROV deployment in blocking prefix hijacks. We perform control-plane and data-plane experiments and provide an in-depth analysis of the collected results. Our analysis is based on new methodologies we developed that allow more accurate identification of ROV enforcing ASes. Our analysis shows that the current ROV enforcement rate is significantly higher than found in previous studies: in contrast to 0.6% in a study from 2021, in our work we find that 37.8% enforce ROV. Our results indicate that ROV has finally gained traction and offers substantial protection against prefix hijacks.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563523](https://doi.org/10.1145/3548606.3563523)
## Poster: On the System-Level Effectiveness of Physical Object-Hiding Adversarial Attack in Autonomous Driving.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-on-the-system-level-effectiveness-of-physical-object-hiding-adversarial-attack-in-autonomous-driving)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-on-the-system-level-effectiveness-of-physical-object-hiding-adversarial-attack-in-autonomous-driving)
### Authors
* Ningfei Wang, University of California, Irvine, Irvine, CA, USA
* Yunpeng Luo, University of California, Irvine, Irvine, CA, USA
* Takami Sato, University of California, Irvine, Irvine, CA, USA
* Kaidi Xu, Drexel University, Philadelphia, PA, USA
* Qi Alfred Chen, University of California, Irvine, Irvine, CA, USA
### Abstract
> In Autonomous Driving (AD) systems, perception is both security and safety-critical. Among different attacks on AD perception, object-hiding adversarial attack is one of the most critical ones due to the direct impact on safety-critical driving decisions such as collision avoidance. However, all of the prior works on physical object-hiding adversarial attacks only study the security of the AI component alone rather than with the entire AD system pipeline with closed-loop control. This thus inevitably raises a critical research question: can these prior works actually achieve system-level effects (e.g., vehicle collisions, traffic rule violation) under real-world AD settings with closed-loop control? To answer this critical question, in this work we take the necessary first step by performing the first measurement study on whether and how effective the existing designs can lead to system-level effects. Our early results find that RP2 and FTE, as two representative examples of prior works, cannot achieve any system-level effect in a representative closed-loop AD setup in common STOP sign-controlled road speeds. In the future, we plan to 1) perform a more comprehensive measurement study using both simulated environments and a real vehicle-sized AD R&D chassis; and 2) analyze the measurement study results and explore new attack designs that can better achieve the system-level effect in AD systems.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563539](https://doi.org/10.1145/3548606.3563539)
## Poster: Enabling Cost-Effective Blockchain Applications via Workload-Adaptive Transaction Execution.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-enabling-cost-effective-blockchain-applications-via-workload-adaptive-transaction-execution)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-enabling-cost-effective-blockchain-applications-via-workload-adaptive-transaction-execution)
### Authors
* Yibo Wang, Syracuse University, Syracuse, NY, USA
* Yuzhe Tang, Syracuse University, Syracuse, NY, USA
### Abstract
> As transaction fees skyrocket today, blockchains become increasingly expensive, hurting their adoption in broader applications. This work tackles the saving of transaction fees for economic blockchain applications. The key insight is that other than the existing "default'' mode to execute application logic fully on-chain, i.e., in smart contracts, and in fine granularity, i.e., user request per transaction, there are alternative execution modes with advantages in cost-effectiveness. On Ethereum, we propose a holistic middleware platform supporting flexible and secure transaction executions, including off-chain states and batching of user requests. Furthermore, we propose control-plane schemes to adapt the execution mode to the current workload for optimal runtime cost. We present a case study on the institutional accounts (e.g., coinbase.com) intensively sending Ether on Ethereum blockchains. By collecting real-life transactions, we construct workload benchmarks and show that our work saves 18%\sim 47%18%-47% per invocation than the default baseline while introducing 1.81%\sim 16.59%1.81%-16.59% blocks delay.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563505](https://doi.org/10.1145/3548606.3563505)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563505](https://dl.acm.org/doi/pdf/10.1145/3548606.3563505)
## Poster: Fingerprint-Face Friction Based Earable Authentication.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-fingerprint-face-friction-based-earable-authentication)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-fingerprint-face-friction-based-earable-authentication)
### Authors
* Zi Wang, Florida State University, Tallahassee, FL, USA
* Yilin Wang, Florida State University, Tallahassee, FL, USA
* Yingying Chen, Rutgers University, Piscataway, NJ, USA
* Jie Yang, Florida State University, Tallahassee, FL, USA
### Abstract
> Ear wearables (earables) have become an emerging and wide acceptable platform for various applications. Because of the limited input interface of earables, traditional authentication methods become less desired. However, the feature-rich sensing abilities of earables and the unique human face-ear channel bring us new sensing opportunities to reutilize fingerprints. In this work, we proposed SlidePass, a secure earables authentication system that leverages the finger-face acoustic friction produced by sliding finger gestures on the face. In particular, our system leverages the inward-facing microphone of the earables to reliably capture the acoustic of finger-face frictions. The core insight of our system is to utilize the face as a natural scanner for finger-face friction and earables to capture and reconstruct the fingerprint features. SlidePass is specially designed for earables. Due to the finger-face friction captured and encrypted by the face channel that is unique and hidden in the human skull, SlidePass is more resistant to various spoofing attacks. Our preliminary evaluation included ten different fingerprints showing that SlidePass achieves an average accuracy of 94%.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563524](https://doi.org/10.1145/3548606.3563524)
## Poster: Clean-label Backdoor Attack on Graph Neural Networks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-clean-label-backdoor-attack-on-graph-neural-networks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-clean-label-backdoor-attack-on-graph-neural-networks)
### Authors
* Jing Xu, Delft University of Technology, Delft, Netherlands
* Stjepan Picek, Radboud University & Delft University of Technology, Nijmegen, Netherlands
### Abstract
> Graph Neural Networks (GNNs) have achieved impressive results in various graph learning tasks. They have found their way into many applications, such as fraud detection, molecular property prediction, or knowledge graph reasoning. However, GNNs have been recently demonstrated to be vulnerable to backdoor attacks. In this work, we explore a new kind of backdoor attack, i.e., a clean-label backdoor attack, on GNNs. Unlike prior backdoor attacks on GNNs in which the adversary can introduce arbitrary, often clearly mislabeled, inputs to the training set, in a clean-label backdoor attack, the resulting poisoned inputs appear to be consistent with their label and thus are less likely to be filtered as outliers. The initial experimental results illustrate that the adversary can achieve a high attack success rate (up to 98.47%) with a clean-label backdoor attack on GNNs for the graph classification task. We hope our work will raise awareness of this attack and inspire novel defenses against it.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563531](https://doi.org/10.1145/3548606.3563531)
## Poster: Unanimous-Majority - Pushing Blockchain Sharding Throughput to its Limit.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-unanimous-majority-pushing-blockchain-sharding-throughput-to-its-limit)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-unanimous-majority-pushing-blockchain-sharding-throughput-to-its-limit)
### Authors
* Yibin Xu, University of Copenhagen, Copenhagen, Denmark
* Tijs Slaats, University of Copenhagen, Copenhagen, Denmark
* Boris Düdder, University of Copenhagen, Copenhagen, Denmark
### Abstract
> Blockchain sharding protocols randomly distribute nodes to different shards. They limit the quantity of shards to ensure that the adversary remains a minority inside each shard with a high probability. There can exist only a small number of shards. In this article, we propose a new sharding protocol that links the number of shards with the adversary population in real-time instead of a fixed upper-bounded population. The protocol is a two-phase design. First, several committee shards are constructed where the majority of nodes inside each are honest with high probability; then, each committee shard randomly splits into several worker shards with a high likelihood that at least one honest node is inside each. Each worker shard handles different transactions. Worker shard blocks that did not pass the unanimous voting are collected and voted by the committee shard using the majority voting. We show that (1) in the worst case (extremely unlikely) when all the transactions need to be handled by the committee shards, the transaction throughput and the data requirement only deteriorate to the same level as classical sharded blockchain; (2) when the worker shards handle most transactions, the overall transaction throughput is zoomed by two magnitudes securely while the data requirement for nodes remains at the same level.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563506](https://doi.org/10.1145/3548606.3563506)
## Poster: User-controlled System-level Encryption for all Applications.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-user-controlled-system-level-encryption-for-all-applications)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-user-controlled-system-level-encryption-for-all-applications)
### Authors
* Tarun Kumar Yadav, Brigham Young University, Provo, UT, USA
* Justin Hales, Brigham Young University, Provo, UT, USA
* Kent Seamons, Brigham Young University, Provo, UT, USA
### Abstract
> Today, some applications encrypt our data, while many others do not. Users must accept the level of protection the application provides. Our research aims to support client-to-client encryption at the system level so that users can enable encryption for data in any application (e.g., email, Slack), even if the application does not support it. Two users can exchange sensitive data without it being accessible to any applications or systems along the path. We will describe the challenges to designing the system, the techniques we will use to build the system, and the advantages of encryption at the system level.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563541](https://doi.org/10.1145/3548606.3563541)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3563541](https://dl.acm.org/doi/pdf/10.1145/3548606.3563541)
## Poster: Automated Discovery of Sensor Spoofing Attacks on Robotic Vehicles.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-automated-discovery-of-sensor-spoofing-attacks-on-robotic-vehicles)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-automated-discovery-of-sensor-spoofing-attacks-on-robotic-vehicles)
### Authors
* Kyeongseok Yang, Korea University, Seoul, South Korea
* Sudharssan Mohan, University of Texas at Dallas, Richardson, TX, USA
* Yonghwi Kwon, University of Virginia, Charlottesville, VA, USA
* Heejo Lee, Korea University, Seoul, South Korea
* Chung Hwan Kim, University of Texas at Dallas, Richardson, TX, USA
### Abstract
> Robotic vehicles are playing an increasingly important role in our daily life. Unfortunately, attackers have demonstrated various sensor spoofing attacks that interfere with robotic vehicle operations, imposing serious threats. Thus, it is crucial to discover such attacks earlier than attackers so that developers can secure the vehicles. In this paper, we propose a new sensor fuzzing framework SensorFuzz that can systematically discover potential sensor spoofing attacks on robotic vehicles. It generates malicious sensor inputs by formally modeling the existing sensor attacks and leveraging high-fidelity vehicle simulation, and then analyzes the impact of the inputs on the vehicle with a resilience-based feedback mechanism.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563551](https://doi.org/10.1145/3548606.3563551)
## Poster: TaintGrep: A Static Analysis Tool for Detecting Vulnerabilities of Android Apps Supporting User-defined Rules.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-taintgrep-a-static-analysis-tool-for-detecting-vulnerabilities-of-android-apps-supporting-user-defined-rules)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-taintgrep-a-static-analysis-tool-for-detecting-vulnerabilities-of-android-apps-supporting-user-defined-rules)
### Authors
* Ruiguo Yang, Peking University, Beijing, China
* Jiajin Cai, Peking University, Beijing, China
* Xinhui Han, Peking University, Beijing, China
### Abstract
> In this poster, we present TaintGrep, a novel static analysis approach to detect vulnerabilities of Android applications. This approach combines the advantages of semantic pattern matching and taint analysis to get better accuracy and be able to detect cross-function vulnerabilities. Compared with many traditional tools, TaintGrep does not require the full source code or building environment to analyze. Moreover, it supports users in defining their customized matching rules using their vulnerability mining experience, which makes this approach more flexible and scalable. In the preliminary experiment, we give a detailed analysis of the rules of two typical vulnerabilities: generic DoS and arbitrary file read/write, and have detected 77 0day vulnerabilities with these rules in 16 well-known Android applications.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563527](https://doi.org/10.1145/3548606.3563527)
## Poster: May the Swarm Be With You: Sensor Spoofing Attacks Against Drone Swarms.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-may-the-swarm-be-with-you-sensor-spoofing-attacks-against-drone-swarms)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-may-the-swarm-be-with-you-sensor-spoofing-attacks-against-drone-swarms)
### Authors
* Yingao (Elaine) Yao, The University of British Columbia, Vancouver, Canada
* Pritam Dash, The University of British Columbia, Vancouver, Canada
* Karthik Pattabiraman, The University of British Columbia, Vancouver, Canada
### Abstract
> Swarm robotics, particularly drone swarms, are used in various safety-critical tasks. While a lot of attention has been paid to improving swarm control algorithms for improved intelligence, the security implications of various design choices in swarm control algorithms have not been studied. We highlight how an attacker can exploit the vulnerabilities in swarm control algorithms to disrupt drone swarms. Specifically, we show that the attacker can target one swarm member (target drone) through sensor spoofing attacks, and indirectly cause other swarm members (victim drones) to veer off from their course, and potentially resulting in a crash. Our attack cannot be prevented by traditional software security techniques, and it is stealthy in nature as it causes seemingly benign deviations in drone swarms. Our initial results show that spoofing the position of a target drone by 5m is sufficient to cause other drones to crash into a front obstacle. Overall, our attack achieves 76.67% and 93.33% success rate with 5m and 10m spoofing deviation respectively.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563535](https://doi.org/10.1145/3548606.3563535)
## Demo: End-to-End Wireless Disruption of CCS EV Charging.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-end-to-end-wireless-disruption-of-ccs-ev-charging)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-end-to-end-wireless-disruption-of-ccs-ev-charging)
### Authors
* Sebastian Köhler, University of Oxford, Oxford, United Kingdom
* Richard Baker, University of Oxford, Oxford, United Kingdom
* Martin Strohmeier, Cyber-Defence Campus, armasuisse Science + Technology, Zurich, Switzerland
* Ivan Martinovic, University of Oxford, Oxford, United Kingdom
### Abstract
> The shift from vehicles with internal combustion engines (ICE) to fully Electric Vehicles (EVs) is happening at a rapid pace. To be competitive with ICEs and ensure a smooth rollout, the charging process of EVs needs to be as fast and convenient as possible. Modern DC fast-charging standards achieve this by implementing a high-level charging communication (HLC), which enables a safe, efficient, and convenient charging experience. However, with the introduction of and reliance on HLC, the security of the communication becomes essential. As we have recently shown, the PLC-based charging communication used by the Combined Charging System (CCS) is vulnerable to a denial-of-service attack. The attack, named Brokenwire, exploits the CSMA/CA medium access mechanism and relies on continuously broadcasting a preamble to force the communication participants to back off to prevent interference. In this demonstration, we present an end-to-end approach for conducting the novel Brokenwire attack. We present the architecture of our software pipeline and demonstrate how it allows an adversary to capture and transmit the attack signal with just one click.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563489](https://doi.org/10.1145/3548606.3563489)
## Demo - SPoKE: Secure Polling and Knowledge Exchange.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-spoke-secure-polling-and-knowledge-exchange)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-spoke-secure-polling-and-knowledge-exchange)
### Authors
* Thomas Sandholm, CableLabs, Santa Clara, CA, USA
* Sayandev Mukherjee, CableLabs, Santa Clara, CA, USA
* Bernardo A. Huberman, CableLabs, Santa Clara, CA, USA
### Abstract
> We present a Web survey system demo that computes aggregates of sensitive data while protecting individual contributions using a novel secure aggregation algorithm implemented in a Web browser.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563701](https://doi.org/10.1145/3548606.3563701)
## Demo - MaLFraDA: A Machine Learning Framework with Data Airlock.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-malfrada-a-machine-learning-framework-with-data-airlock)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-malfrada-a-machine-learning-framework-with-data-airlock)
### Authors
* Chandra Thapa, CSIRO's Data61, Marsfield, NSW, Australia
* Seyit Camtepe, CSIRO's Data61, Marsfield, NSW, Australia
* Raj Gaire, KPMG Australia, Canberra, ACT, Australia
* Surya Nepal, CSIRO's Data61, Marsfield, NSW, Australia
* Seung Ick Jang, CSIRO's Data61, Marsfield, NSW, Australia
### Abstract
> Training machine learning algorithms on sensitive, illegal to possess, and psychologically harmful data is challenging because researchers have to do training without handling the data. Moreover, the nature of the data imposes strict control, monitoring, and examination of all the activities involved, including communication, execution, and release of algorithms, datasets, outputs, and results. In this regard, this work proposes a new multi-zoned framework called MaLFraDA. MaLFraDA has soft air gaps between its zones to isolate and control communication in and out of the framework. Besides, it includes (i) a vetter to investigate and approve incoming model/algorithm, and outgoing information, (ii) encrypted data vaults, and (iii) airlock instances for secure execution/computation. MaLFraDA, with an extension, runs popular distributed machine learning algorithms such as federated and split learning using multiple data custodians.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563480](https://doi.org/10.1145/3548606.3563480)
## Demo: VaxPass - A Scalable and Verifiable Platform for COVID-19 Records.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-vaxpass-a-scalable-and-verifiable-platform-for-covid-19-records)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#demo-vaxpass-a-scalable-and-verifiable-platform-for-covid-19-records)
### Authors
* Xiangan Tian, HKUST, Hong Kong, Hong Kong
* Vlasis Koutsos, HKUST, Hong Kong, Hong Kong
* Lijia Wu, HKUST, Hong Kong, Hong Kong
* Yijian Wu, HKUST, Hong Kong, Hong Kong
* Dimitrios Papadopoulos, HKUST, Hong Kong, Hong Kong
### Abstract
> COVID-19 has altered the landscape of medical record issuing and verification. Multiple challenges have arisen in this new era as individuals are now required to prove their health status for traveling, working, or simply eating at a restaurant. Record verification across country borders is particularly hard to achieve as it requires collaboration at an international level, sharing potentially sensitive medical data. In this work, we propose VaxPass, a scalable system for COVID-19 record issuing and verification that facilitates this collaboration with minimal data leakage. At the core of our design lies a 2-tier blockchain architecture that allows individual issuing authorities to maintain their own 1st -level blockchain and only upload a small digest of their records, periodically, on the 2nd -level. Crucially, a verifier can check the validity of a certificate without having access to the 1st -level blockchain where the records actually reside. Our system also includes a mobile application and a web client. As we demonstrate, its performance scales well with the number of participants, making this the first solution able to support real-life inspired needs for such a system, while maintaining confidentiality of the medical data solely to privy entities.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563492](https://doi.org/10.1145/3548606.3563492)
## WAHC'22: 10th Workshop on Encrypted Computing and Applied Homomorphic Cryptography.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#wahc22-10th-workshop-on-encrypted-computing-and-applied-homomorphic-cryptography)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#wahc22-10th-workshop-on-encrypted-computing-and-applied-homomorphic-cryptography)
### Authors
* Michael Brenner, Leibniz Universität, Hannover, Germany
* Anamaria Costache, The Norwegian University of Science and Technology, Trondheim, Norway
* Kurt Rohloff, NJIT and Duality Technologies, New Jersey, NJ, USA
### Abstract
> The 10th Workshop on Encrypted Computing and Applied Homomorphic Cryptography is held in Los Angeles, CA, USA on November 7, 2022, co-located with the ACM Conference on Computer and Communications Security (CCS). The workshop aims to bring together professionals, researchers and practitioners from academia, industry and government in the area of computer security and applied cryptography with an interest in practical applications of homomorphic encryption, encrypted computing, functional encryption and secure function evaluation, private information retrieval and searchable encryption. The workshop will feature 6 exciting accepted talks on different aspects of secure computation and a forum to discuss current and future challenges. Additionally, the workshop will feature one keynote presentation, as well as a working session. The complete WAHC'22 workshop proceedings are available at: https://dl.acm.org/doi/proceedings/10.1145/3560827.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563287](https://doi.org/10.1145/3548606.3563287)
## CPSIoTSec '22: 4th Workshop on CPS & IoT Security and Privacy.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cpsiotsec-22-4th-workshop-on-cps-iot-security-and-privacy)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#cpsiotsec-22-4th-workshop-on-cps-iot-security-and-privacy)
### Authors
* Earlence Fernandes, University of California, San Diego, La Jolla, CA, USA
* Cristina Alcaraz, University of Malaga, Malaga, Spain
### Abstract
> There is a rapidly growing interest in the security of cyber-physical systems (CPS) and internet-of-things (IoT) in industry, government and academia. This interest is also reflected in this workshop that from 2019 has been part of the ACM Conference on Computer and Communications Security, which originally hosted two workshops: One on CPS security and privacy (running 5 times in the past) and one on IoT security and privacy (running 2 times in the past). Due to the close connection of the two topics, the Steering Committees of the two workshops decided in 2020 to merge towards delivering a world-class event on CPS&IoT security and privacy. CPSIoTSec'22 corresponds to the fourth edition of this merger. CPS&IoTSec'22 attracted 16 submissions, which were assigned to four independent reviewers. Following a rigorous peer-review process, 3 full papers and 4 short papers were accepted, achieving an acceptance rate of 43.75%. We would like to express our deepest thanks to the CPS&IoTSec'22 Steering Committee for entrusting us with organizing the workshop, and all the members of the program committee for their valuable reviews and discussions. Likewise, we would like to thank all the authors who submitted their contributions in the CPS & IoT Security field. The complete CPSIoTSec'22 workshop proceedings are available at: https://dl.acm.org/doi/proceedings/10.1145/3560826

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563360](https://doi.org/10.1145/3548606.3563360)
## WPES '22: 21st Workshop on Privacy in the Electronic Society.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#wpes-22-21st-workshop-on-privacy-in-the-electronic-society)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#wpes-22-21st-workshop-on-privacy-in-the-electronic-society)
### Authors
* Yuan Hong, University of Connecticut, Storrs, CT, USA
* Lingyu Wang, Concordia University, Montreal, PQ, Canada
### Abstract
> These proceedings contain the papers selected for inclusion in the technical program for the 21st ACM Workshop on Privacy in the Electronic Society (WPES 2022), held in conjunction with the 29th ACM Conference on Computer and Communication Security (CCS 2022). This year, WPES is held as a hybrid event (including both in-person and online presentations) on November 7, 2022. In response to the workshop's call for papers, 59 valid submissions were received. These 59 submissions include 43 submissions as full papers and 16 submissions as short papers. They were evaluated by a technical program committee consisting of 51 researchers whose backgrounds include a diverse set of topics related to privacy. Each paper was reviewed by at least 3 members of the program committee, and the average number of reviews for each paper is 3.75. Papers were evaluated based on their importance, novelty, and technical quality. After the rigorous review process, 12 submissions were accepted as full papers (acceptance rate: 20.3%) and additionally 8 submissions were accepted as short papers. The complete workshop proceedings are available at the following URL: https://dl.acm.org/doi/proceedings/10.1145/3559613.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563220](https://doi.org/10.1145/3548606.3563220)
## MTD '22: 9th ACM Workshop on Moving Target Defense.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#mtd-22-9th-acm-workshop-on-moving-target-defense)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#mtd-22-9th-acm-workshop-on-moving-target-defense)
### Authors
* Hamed Okhravi, Massachusetts Institute of Technology, Lexington, MA, USA
* Cliff Wang, National Science Foundation, Alexandria, VA, USA
### Abstract
> The ninth ACM Workshop on Moving Target Defense (MTD) Workshop is held on November 7, 2022, in conjunction with the ACM Conference on Computer and Communications Security (CCS). The main objective of the workshop is to discuss novel randomization, diversification, and dynamism techniques for computer systems and network, new metric and analysis frameworks to assess and quantify the effectiveness of MTD, and discuss challenges and opportunities that such defenses provide. This year the workshop has also incorporated a number of invited papers to capture the lessons learned from experts in this field, and highlight some of the unique opportunities for MTD in hardware and challenges of practical deployment of MTD techniques. We have constructed an exciting and diverse program of five refereed papers, two invited papers, and two invited keynote talks that will provide the participant with a vibrant and thought-provoking set of ideas and insights.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563358](https://doi.org/10.1145/3548606.3563358)
## CCSW '22: The 2022 Cloud Computing Security Workshop.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ccsw-22-the-2022-cloud-computing-security-workshop)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ccsw-22-the-2022-cloud-computing-security-workshop)
### Authors
* Marten van Dijk, Centrum Wiskunde & Informatica, Amsterdam, Netherlands
* Francesco Regazzoni, University of Amsterdam & Università della Svizzera italiana, Amsterdam, Netherlands
### Abstract
> Clouds and massive-scale computing infrastructures are starting to dominate computing and will likely continue to do so for the foreseeable future. Major cloud operators are now comprising millions of cores hosting substantial fractions of corporate and government IT infrastructure. CCSW is the world's premier forum bringing together researchers and practitioners in all security aspects of cloud-centric and outsourced computing, including: ·Side channel attacks ·Cryptographic protocols for cloud security ·Secure cloud resource virtualization mechanisms ·Secure data management outsourcing (e.g., database as a service) ·Privacy and integrity mechanisms for outsourcing ·Foundations of cloud-centric threat models ·Secure computation outsourcing ·Remote attestation mechanisms in clouds ·Sandboxing and VM-based enforcements ·Trust and policy management in clouds ·Secure identity management mechanisms ·Cloud-aware web service security paradigms and mechanisms ·Cloud-centric regulatory compliance issues and mechanisms ·Business and security risk models and clouds ·Cost and usability models and their interaction with security in clouds ·Scalability of security in global-size clouds ·Binary analysis of software for remote attestation and cloud protection ·Network security (DOS, IDS etc.) mechanisms for cloud contexts ·Security for emerging cloud programming models ·Energy/cost/efficiency of security in clouds ·mOpen hardware for cloud ·Machine learning for cloud protection CCSW especially encourages novel paradigms and controversial ideas that are not on the above list. The workshop has historically acted as a fertile ground for creative debate and interaction in security-sensitive areas of computing impacted by clouds. This year marked the 13th anniversary of CCSW. In the past decade, CCSW has had a significant impact in our research community.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563821](https://doi.org/10.1145/3548606.3563821)
## ConsensusDay '22: ACM Workshop on Developments in Consensus.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#consensusday-22-acm-workshop-on-developments-in-consensus)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#consensusday-22-acm-workshop-on-developments-in-consensus)
### Authors
* Jorge M. Soares, Protocol Labs, San Francisco, CA, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
* Marko Vukolic, Protocol Labs, San Francisco, CA, USA
### Abstract
> Consensus - loosely defined as global agreement on the state of a decentralised network across its mutually untrusting participants - is an essential ingredient for decentralisation. At the same time, its scalability remains the Achilles' heel of distributed systems. A number of ongoing R&D efforts aim at scaling blockchain networks up to hundreds of thousands of transactions per second. Yet even such performance targets can be seen as modest when the goal is to bring traditional web workloads to the decentralised web (Web3), requiring the handling of billions of transactions per second, large volumes of data, complex workloads and applications, and hard latency requirements. The goal of this workshop is to foster scientific exchange across a wider community in consensus research and adjacent fields, by disseminating and providing a forum for discussion of upcoming impactful research with a practical twist.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563286](https://doi.org/10.1145/3548606.3563286)
## ASHES 2022 - 6th Workshop on Attacks and Solutions in Hardware Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ashes-2022-6th-workshop-on-attacks-and-solutions-in-hardware-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#ashes-2022-6th-workshop-on-attacks-and-solutions-in-hardware-security)
### Authors
* Chip Hong Chang, NTU Singapore, Singapore, Singapore
* Domenic Forte, University of Florida, Gainesville, FL, USA
* Debdeep Mukhopadhyay, Indian Institute of Technology Kharagpur, Kharagpur, India
* Ulrich Rührmair, LMU München, München, Germany
### Abstract
> The workshop on "Attacks and Solutions in HardwarE Security (ASHES)" welcomes any theoretical and practical works on hardware security, including attacks, solutions, countermeasures, proofs, classification, formalization, and implementations. Besides mainstream research, ASHES puts some focus on new and emerging scenarios: This includes the Internet of Things (IoT), nuclear weapons inspections, arms control, consumer and infrastructure security, or supply chain security, among others. ASHES also welcomes dedicated works on special purpose hardware, such as lightweight, low-cost, and energy-efficient devices, or non-electronic security systems. The workshop hosts four different paper categories: Apart from regular and short papers, this includes works that systematize and structure a certain (sub-)area (so-called "Systematization of Knowledge" (SoK) papers), and so-termed "Wild-and-Crazy" (WaC) papers, which distribute seminal ideas at an early conceptual stage. This summary gives a brief overview of the sixth edition of the workshop, which took place virtually on November 11, 2022 in Los Angeles, California, USA, as a post-conference satellite workshop of ACM CCS.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563763](https://doi.org/10.1145/3548606.3563763)
## AISec '22: 15th ACM Workshop on Artificial Intelligence and Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#aisec-22-15th-acm-workshop-on-artificial-intelligence-and-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#aisec-22-15th-acm-workshop-on-artificial-intelligence-and-security)
### Authors
* Ambra Demontis, University of Cagliari, Cagliari, UNK, Italy
* Xinyun Chen, Google Brain, Mountain View, CA, USA
* Florian Tramèr, ETH Zürich, Zürich, Switzerland
### Abstract
> Recent years have seen a dramatic increase in applications of Artificial Intelligence (AI), Machine Learning (ML), and data mining to security and privacy problems. The analytic tools and intelligent behavior provided by these techniques make AI and ML increasingly important for autonomous real-time analysis and decision making in domains with a wealth of data or that require quick reactions to constantly changing situations. The use of learning methods in security-sensitive domains, in which adversaries may attempt to mislead or evade intelligent machines, creates new frontiers for security research. The recent widespread adoption of "deep learning" techniques, whose security properties are difficult to reason about directly, has only added to the importance of this research. In addition, data mining and machine learning techniques create a wealth of privacy issues, due to the abundance and accessibility of data. The AISec workshop provides a venue for presenting and discussing new developments in the intersection of security and privacy with AI and machine learning.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563683](https://doi.org/10.1145/3548606.3563683)
## Checkmate '22: Research on offensive and defensive techniques in the context of Man At The End (MATE) attacks.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#checkmate-22-research-on-offensive-and-defensive-techniques-in-the-context-of-man-at-the-end-mate-attacks)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#checkmate-22-research-on-offensive-and-defensive-techniques-in-the-context-of-man-at-the-end-mate-attacks)
### Authors
* Golden G. Richard III, Louisiana State University, Baton Rouge, LA, USA
* Tim Blazytko, emproof B.V., Bochum, Germany
### Abstract
> The MATE (Man-At-The-End) model, in which an attacker has access to the target software and/or hardware environment to be exploited and the ability to observe and modify that environment, poses unique challenges for both defense and offense. The CheckMATE workshop focuses on exploration of both offensive and defensives techniques under this model. CheckMATE will provide a discussion forum for researchers and industrial practitioners that are exploring theorentical, practical, and emperical studies in this interesting area of security.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3564247](https://doi.org/10.1145/3548606.3564247)
## SCORED '22: ACM Workshop on Software Supply Chain Offensive Research and Ecosystem Defenses.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#scored-22-acm-workshop-on-software-supply-chain-offensive-research-and-ecosystem-defenses)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#scored-22-acm-workshop-on-software-supply-chain-offensive-research-and-ecosystem-defenses)
### Authors
* Santiago Torres-Arias, Purdue University, West Lafayette, IN, USA
* Marcela Melara, Intel Corporation, Hillsboro, OR, USA
* Laurent Simon, Google Inc., Mountain View, CA, USA
### Abstract
> Recent attacks on the software supply chain have shed light on the fragility and importance of ensuring the security and integrity of this vital ecosystem. Addressing the technical and social challenges to building trustworthy software for deployment in sensitive and/or large-scale enterprise or governmental settings requires innovative solutions and an interdisciplinary approach. The Workshop on Software Supply Chain Offensive Research and Ecosystem Defenses (SCORED) is a venue that brings together industry practitioners, academics, and policymakers to present and discuss security vulnerabilities, novel defenses against attacks, project demos, adoption requirements and best practices in the software supply chain. The complete SCORED'22 workshop proceedings are available at: https://dl.acm.org/doi/proceedings/10.1145/3560835

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563443](https://doi.org/10.1145/3548606.3563443)
## AMSec'22: ACM CCS Workshop on Additive Manufacturing (3D Printing) Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#amsec22-acm-ccs-workshop-on-additive-manufacturing-3d-printing-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#amsec22-acm-ccs-workshop-on-additive-manufacturing-3d-printing-security)
### Authors
* Mark Yampolskiy, Auburn University, Auburn, AL, USA
* Moti Yung, Google LLC & Columbia University, New York, NY, USA
### Abstract
> While Security is universally needed, it is rarely plug-and-play. The new domain of Additive Manufacturing (a.k.a. 3D Printing) Security requires novel solutions to its unique security concerns. This workshop brings together researchers and practitioners working in this highly inter-disciplinary research field and closely related areas.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563554](https://doi.org/10.1145/3548606.3563554)
## DeFi '22: ACM CCS Workshop on Decentralized Finance and Security.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#defi-22-acm-ccs-workshop-on-decentralized-finance-and-security)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#defi-22-acm-ccs-workshop-on-decentralized-finance-and-security)
### Authors
* Fan Zhang, Yale University, New Haven, CT, USA
* Patrick McCorry, Infura, London, United Kingdom
### Abstract
> Powered by blockchains, Decentralized Finance (DeFi) has grown to a significant economy covering exchanges, borrowing/lending, margin trading, derivatives, and more. While DeFi systems are gaining significant traction (e.g., they already manage tens of billions of dollars worth of assets), making them secure has proven exceptionally challenging---a staggering $1.9 billion was stolen in various hacks in the first seven months of 2022 alone.[4] The challenge faced by the research community is twofold. First, DeFi gives rise to new security problems (such as MEV) that existing methods cannot effectively address. Second, understanding DeFi and its security and privacy implications requires knowledge from a wide range of subjects, such as consensus, game theory, programming language, economics, politics, etc. The goal of this workshop is to bring together researchers from many different fields to jointly advance the understanding of DeFi security and develop new methods and solutions leveraging the interdisciplinary expertise of the community.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563431](https://doi.org/10.1145/3548606.3563431)
## PEReDi: Privacy-Enhanced, Regulated and Distributed Central Bank Digital Currencies.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#peredi-privacy-enhanced-regulated-and-distributed-central-bank-digital-currencies)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#peredi-privacy-enhanced-regulated-and-distributed-central-bank-digital-currencies)
### Authors
* Aggelos Kiayias, The University of Edinburgh & IOG, Edinburgh, United Kingdom
* Markulf Kohlweiss, The University of Edinburgh & IOG, Edinburgh, United Kingdom
* Amirreza Sarencheh, The University of Edinburgh & IOG, Edinburgh, United Kingdom
### Abstract
> Central Bank Digital Currencies (CBDCs) aspire to offer a digital replacement for physical cash and as such need to tackle two fundamental requirements that are in conflict. On the one hand, it is desired they are private so that a financial "panopticon'' is avoided, while on the other, they should be regulation friendly in the sense of facilitating any threshold-limiting, tracing, and counterparty auditing functionality that is necessary to comply with regulations such as Know Your Customer (KYC), Anti Money Laundering (AML) and Combating Financing of Terrorism (CFT) as well as financial stability considerations. In this work, we put forth a new model for CBDCs and an efficient construction that, for the first time, fully addresses these issues simultaneously. Moreover, recognizing the importance of avoiding a single point of failure, our construction is distributed so that all its properties can withstand a suitably bounded minority of participating entities getting corrupted by an adversary. Achieving all the above properties efficiently is technically involved; among others, our construction uses suitable cryptographic tools to thwart man-in-the-middle attacks, it showcases a novel traceability mechanism with significant performance gains compared to previously known techniques and, perhaps surprisingly, shows how to obviate Byzantine agreement or broadcast from the optimistic execution path of a payment, something that results in an essentially optimal communication pattern and communication overhead when the sender and receiver are honest. Going beyond "simple'' payments, we also discuss how our scheme can facilitate one-off large transfers complying with Know Your Transaction (KYT) disclosure requirements. Our CBDC concept is expressed and realized in the Universal Composition (UC) framework providing in this way a modular and secure way to embed it within a larger financial ecosystem.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560707](https://doi.org/10.1145/3548606.3560707)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560707](https://dl.acm.org/doi/pdf/10.1145/3548606.3560707)
## DriveFuzz: Discovering Autonomous Driving Bugs through Driving Quality-Guided Fuzzing.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#drivefuzz-discovering-autonomous-driving-bugs-through-driving-quality-guided-fuzzing)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#drivefuzz-discovering-autonomous-driving-bugs-through-driving-quality-guided-fuzzing)
### Authors
* Seulbae Kim, Georgia Institute of Technology, Atlanta, GA, USA
* Major Liu, University of Texas at Dallas, Richardson, TX, USA
* Junghwan "John" Rhee, University of Central Oklahoma, Edmond, OK, USA
* Yuseok Jeon, UNIST, Ulsan, Republic of Korea
* Yonghwi Kwon, University of Virginia, Charlottesville, VA, USA
* Chung Hwan Kim, University of Texas at Dallas, Richardson, TX, USA
### Abstract
> Autonomous driving has become real; semi-autonomous driving vehicles in an affordable price range are already on the streets, and major automotive vendors are actively developing full self-driving systems to deploy them in this decade. Before rolling the products out to the end-users, it is critical to test and ensure the safety of the autonomous driving systems, consisting of multiple layers intertwined in a complicated way. However, while safety-critical bugs may exist in any layer and even across layers, relatively little attention has been given to testing the entire driving system across all the layers. Prior work mainly focuses on white-box testing of individual layers and preventing attacks on each layer. In this paper, we aim at holistic testing of autonomous driving systems that have a whole stack of layers integrated in their entirety. Instead of looking into the individual layers, we focus on the vehicle states that the system continuously changes in the driving environment. This allows us to design DriveFuzz, a new systematic fuzzing framework that can uncover potential vulnerabilities regardless of their locations. DriveFuzz automatically generates and mutates driving scenarios based on diverse factors leveraging a high-fidelity driving simulator. We build novel driving test oracles based on the real-world traffic rules to detect safety-critical misbehaviors, and guide the fuzzer towards such misbehaviors through driving quality metrics referring to the physical states of the vehicle. DriveFuzz has discovered 30 new bugs in various layers of two autonomous driving systems (Autoware and CARLA Behavior Agent) and three additional bugs in the CARLA simulator. We further analyze the impact of these bugs and how an adversary may exploit them as security vulnerabilities to cause critical accidents in the real world.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560558](https://doi.org/10.1145/3548606.3560558)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560558](https://dl.acm.org/doi/pdf/10.1145/3548606.3560558)
## Phishing URL Detection: A Network-based Approach Robust to Evasion.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#phishing-url-detection-a-network-based-approach-robust-to-evasion)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#phishing-url-detection-a-network-based-approach-robust-to-evasion)
### Authors
* Taeri Kim, Hanyang University, Seoul, Republic of Korea
* Noseong Park, Yonsei University, Seoul, Republic of Korea
* Jiwon Hong, Hanyang University, Seoul, Republic of Korea
* Sang-Wook Kim, Hanyang University, Seoul, Republic of Korea
### Abstract
> Many cyberattacks start with disseminating phishing URLs. When clicking these phishing URLs, the victim's private information is leaked to the attacker. There have been proposed several machine learning methods to detect phishing URLs. However, it still remains under-explored to detect phishing URLs with evasion, i.e., phishing URLs that pretend to be benign by manipulating patterns. In many cases, the attacker i) reuses prepared phishing web pages because making a completely brand-new set costs non-trivial expenses, ii) prefers hosting companies that do not require private information and are cheaper than others, iii) prefers shared hosting for cost efficiency, and iv) sometimes uses benign domains, IP addresses, and URL string patterns to evade existing detection methods. Inspired by those behavioral characteristics, we present a network-based inference method to accurately detect phishing URLs camouflaged with legitimate patterns, i.e., robust to evasion. In the network approach, a phishing URL will be still identified as phishy even after evasion unless a majority of its neighbors in the network are evaded at the same time. Our method consistently shows better detection performance throughout various experimental tests than state-of-the-art methods, e.g., F-1 of 0.891 for our method vs. 0.840 for the best feature-based method.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560615](https://doi.org/10.1145/3548606.3560615)
## Don't Kick Over the Beehive: Attacks and Security Analysis on Zigbee.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dont-kick-over-the-beehive-attacks-and-security-analysis-on-zigbee)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#dont-kick-over-the-beehive-attacks-and-security-analysis-on-zigbee)
### Authors
* Xian Wang, University of Texas at Dallas, Richardson, TX, USA
* Shuang Hao, University of Texas at Dallas, Richardson, TX, USA
### Abstract
> The blooming of the Internet of Things (IoT) has led to the demand for new connectivity technologies. Zigbee, with its low-power consumption and flexible network structure, has become one of the essential wireless communication protocols in the IoT ecosystem and is adopted by many major companies. There have been over thousands of certified Zigbee products, ranging from sensors, to link light products, to smart energy devices. A common belief is that Zigbee is comparatively secure, due to the nature of closed networks and the use of encryption.   However, in this paper, we find Zigbee-related attacks in which adversaries are outside of the target network and have no knowledge of the encryption keys. The low attack requirements pose high threats. The attacks mislead devices to accept forged packets, which will jeopardize the normal operations of Zigbee networks. We further develop a framework to efficiently identify such problems. The framework supports flexible modification of address and network information, and bit-level manipulations from the MAC layer. To accelerate analysis, we design semantic-aware fuzzing to generate packet candidates that are more likely to produce meaningful results.   We conduct experiments on 10 real-world Zigbee systems. Using our approach, we have identified five types of practical attacks, ranging from communication disruption to security key leakage. We show proof-of-concept attacks on industry Zigbee products and systems. Our findings bring to light new security issues of Zigbee and further motivate possible mitigation approaches.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3560703](https://doi.org/10.1145/3548606.3560703)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3548606.3560703](https://dl.acm.org/doi/pdf/10.1145/3548606.3560703)
## Poster: DNS in Routers Considered Harmful.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-dns-in-routers-considered-harmful)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-dns-in-routers-considered-harmful)
### Authors
* Haya Shulman, ATHENE & Goethe-Universität Frankfurt & Fraunhofer SIT, Darmstadt, Germany
* Michael Waidner, ATHENE & Goethe-Universität Frankfurt & Fraunhofer SIT, Darmstadt, Germany
### Abstract
> To save costs residential routers often do not implement most of the functionalities and security features of DNS, yet they still contain DNS forwarders which merely proxy the clients' requests to another address. These forwarders separate the network configuration of the internal client network from the network of the ISP. This provides connectivity without the need for synchronization. History of cache poisoning attacks shows however that such simplified implementations expose a wide range of vulnerabilities. We propose to remove DNS from routers. We show that the performance impact is negligible, while security gain is substantial. We discuss a number of ways for implementing our approach

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563509](https://doi.org/10.1145/3548606.3563509)
## Poster: Privacy-preserving Genome Analysis using Verifiable Off-Chain Computation.
🌍 **[English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-privacy-preserving-genome-analysis-using-verifiable-off-chain-computation)** | [简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security[2022].md#poster-privacy-preserving-genome-analysis-using-verifiable-off-chain-computation)
### Authors
* Leon Visscher, University of Groningen, Groningen, Netherlands
* Mohammed Alghazwi, University of Groningen, Groningen, Netherlands
* Dimka Karastoyanova, University of Groningen, Groningen, Netherlands
* Fatih Turkmen, University of Groningen, Groningen, Netherlands
### Abstract
> Genome-wide association studies (GWAS) focus on finding associations between genotypes and phenotypes such as susceptibility to diseases. Since genetic data is extremely sensitive and long-lived, individuals and organizations are reluctant to share their data for analysis. This paper proposes two solutions for a fully decentralized and privacy-preserving system for performing minor allele frequency analysis on multiple data sets. Homomorphic encryption and zero-knowledge proofs are used in combination with a blockchain system to achieve data privacy and enable verifiability. Preliminary evaluation of the solutions reveals several important challenges such as handling large cipher texts in smart contracts and reuse of the encrypted data for specific researcher queries that need to be tackled in order to make the solutions more practical.

### Links
- **URL:** [https://doi.org/10.1145/3548606.3563548](https://doi.org/10.1145/3548606.3563548)
